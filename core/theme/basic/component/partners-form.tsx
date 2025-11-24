'use client'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader as UiCardHeader, CardTitle as UiCardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Repeat, UploadCloud, X } from 'lucide-react';
import Image from 'next/image';
import React, { useCallback, useRef, useState } from 'react'

const MAX_IMAGES_PER_PRODUCT = 10;

type Props = {
    register: any;
    errors: any;
    setValue: any;
    watch: any;
    control: any;
}

interface ImageObject {
    id: string;
    name: string;
    type: 'file' | 'url';
    data: File | string;
    previewUrl: string;
}

const PartnersForm = ({ errors, setValue }: Props) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const replaceFileInputRef = useRef<HTMLInputElement>(null); // For replacing single images
    const [imageToReplaceId, setImageToReplaceId] = useState<string | null>(null); // To track which image to replace
    const [imageFiles, setImageFiles] = useState<ImageObject[]>([]);

    const handleImageFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files);
            const remainingSlots = MAX_IMAGES_PER_PRODUCT - imageFiles.length;

            if (filesArray.length === 0) return;

            if (remainingSlots <= 0) {
                alert(`Maximum ${MAX_IMAGES_PER_PRODUCT} images allowed.`);
                if (fileInputRef.current) fileInputRef.current.value = '';
                return;
            }

            // Limit the new files to fill only remaining slots
            const filesToProcess = filesArray.slice(0, remainingSlots);

            const newImageObjects: ImageObject[] = filesToProcess.map(file => ({
                id: crypto.randomUUID(),
                name: file.name,
                type: 'file',
                data: file,
                previewUrl: URL.createObjectURL(file),
            }));

            setImageFiles(prevImages => {
                const updated = [...prevImages, ...newImageObjects];
                updateFormDataImages(updated);
                return updated;
            });

            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };


    const handleReplaceImageClick = (idToReplace: string) => {
        setImageToReplaceId(idToReplace);
        replaceFileInputRef.current?.click();
    };

    const updateFormDataImages = useCallback((updatedImageObjects: ImageObject[]) => {
        setValue('images', updatedImageObjects.map(img => img.data));
    }, []);

    const handleReplaceImageFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && imageToReplaceId) {
            const newImageObject: ImageObject = {
                id: imageToReplaceId, // Keep the same ID for replacement
                name: file.name,
                type: 'file',
                data: file,
                previewUrl: URL.createObjectURL(file),
            };

            setImageFiles(prevImages => {
                const updated = prevImages.map(img => {
                    if (img.id === imageToReplaceId) {
                        // Revoke old blob URL if it exists to prevent memory leaks
                        if (img.previewUrl.startsWith('blob:')) {
                            URL.revokeObjectURL(img.previewUrl);
                        }
                        return newImageObject;
                    }
                    return img;
                });
                updateFormDataImages(updated);
                return updated;
            });

            // Clean up
            setImageToReplaceId(null);
            if (replaceFileInputRef.current) replaceFileInputRef.current.value = '';
        }
    };


    const handleRemoveImage = (idToRemove: string) => {
        setImageFiles(prevImages => {
            const imgToRemove = prevImages.find(img => img.id === idToRemove);
            if (imgToRemove && imgToRemove.previewUrl.startsWith('blob:')) URL.revokeObjectURL(imgToRemove.previewUrl);
            const updated = prevImages.filter(image => image.id !== idToRemove);
            updateFormDataImages(updated);
            return updated;
        });
    };

    return (
        <Card className='rounded-md'>
            <UiCardHeader>
                <UiCardTitle className="text-lg flex items-center"><UploadCloud className="mr-2 h-5 w-5 text-primary" />
                    Partner Images (Up to {MAX_IMAGES_PER_PRODUCT})
                </UiCardTitle>
            </UiCardHeader>
            <CardContent className="space-y-4">
                <div>
                    <Input
                        type="file"
                        multiple
                        accept="image/*"
                        disabled={imageFiles.length >= MAX_IMAGES_PER_PRODUCT}
                        ref={fileInputRef}
                        onChange={handleImageFileChange}
                    />
                    {/* Hidden file input for replacing a single image */}
                    <input
                        type="file"
                        ref={replaceFileInputRef}
                        onChange={handleReplaceImageFileChange}
                        className="hidden"
                        multiple
                        accept="image/*"
                    />

                    {imageFiles.length > 0 && (
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 mt-2">
                            {imageFiles.map(img => (
                                <div key={img.id} className="relative group aspect-square border rounded overflow-hidden">
                                    <button type="button" onClick={() => handleReplaceImageClick(img.id)} className="w-full h-full block">
                                        <Image src={img.previewUrl} alt={img.name} layout="fill" objectFit="cover" />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <Repeat className="h-6 w-6 text-white" />
                                        </div>
                                    </button>
                                    <Button type="button" variant="destructive" size="icon" className="absolute top-0.5 right-0.5 h-5 w-5 opacity-0 group-hover:opacity-100 p-0.5 z-10" onClick={(e) => { e.stopPropagation(); handleRemoveImage(img.id); }}>
                                        <X className="h-3 w-3" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                    {errors.images && <p className="text-red-500 mt-1">{errors.images.message}</p>}
                </div>
            </CardContent>
        </Card>
    )
}

export default PartnersForm