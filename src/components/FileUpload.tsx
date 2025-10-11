import { useRef } from "react";
import type { ChangeEvent, DragEvent } from "react";

interface FileUploadProps {
  fileName: string;
  onFileSelected: (file: File) => void;
  onDrop: (event: DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: DragEvent<HTMLDivElement>) => void;
}

export function FileUpload({ fileName, onFileSelected, onDrop, onDragOver }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) onFileSelected(file);
  };

  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      onClick={() => inputRef.current?.click()}
      className="border-2 border-dashed border-black rounded-lg p-5 text-center cursor-pointer hover:bg-[#82979e] text-white"
    >
      {fileName ? <p>{fileName} selected</p> : <p>Drag and drop a Savefile here, or click to browse and upload it...</p>}
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
}
