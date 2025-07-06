// components/MyInput.tsx
import { Input } from "@heroui/react";

export default function MyInput() {
  return (
    <Input
      size="sm"
      type="email"
      classNames={{
        inputWrapper: "bg-gray-100 h-5",
      }}
    />
  );
}
