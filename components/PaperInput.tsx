
import React from 'react';

interface PaperInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const PaperInput: React.FC<PaperInputProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col h-full">
      <label htmlFor="paper-content" className="text-lg font-semibold mb-2 text-gray-300">
        Paper Content
      </label>
      <textarea
        id="paper-content"
        value={value}
        onChange={onChange}
        placeholder="Paste the research paper text or abstract here..."
        className="w-full flex-grow bg-gray-800 border border-gray-700 rounded-lg p-4 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow duration-300 resize-none text-gray-200"
        rows={15}
      />
    </div>
  );
};
