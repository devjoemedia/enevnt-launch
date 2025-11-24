'use client'
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";

type User = {
  name: string;
  role: string;
};

const SpeakersForm = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [speakerName, setSpeakerName] = useState("");
  const [addSpeakers, setAddSpeakers] = useState(false);

  const handleChange = (index: number, field: keyof User, value: string) => {
    const updatedUsers = [...users];
    updatedUsers[index][field] = value;
    setUsers(updatedUsers);
  };

  const handleAddUser = () => {
    if (!speakerName.trim()) return;
    setUsers([...users, { name: speakerName, role: "Guest" }]);
    setSpeakerName("");
  };

  const handleRemoveUser = (index: number) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };


  return (
    <div className="">
      <div className="flex items-center space-x-2">
        <Switch
          className="w-10 h-[25px]"
          id="add-speakers"
          onCheckedChange={(checked) => setAddSpeakers(checked)}
        />
        <Label htmlFor="add-speakers">Add Speakers</Label>
      </div>
      {addSpeakers && (
        <div className="py-5">
          <Field>
            <Input value={speakerName} onChange={(e) => setSpeakerName(e.target.value)} id="name" placeholder="Speaker Name" type="text" required />
          </Field>
          <button onClick={handleAddUser} type="submit" className='bg-gray-800 min-w-[100px] text-white px-4 py-2! rounded-full mt-5'>
            Add
          </button>
        </div>
      )}
      {users.length > 0 && (
        <div className=" flex flex-wrap">
          {users.map((user, index) => (
            <div key={index} className="border  gap-1 border-gray-100 text-xs flex items-center justify-between rounded-full px-3">
              <span>{user.name}</span>
              <button type="button" onClick={() => handleRemoveUser(index)} className="text-red-500 text-base">x</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpeakersForm;
