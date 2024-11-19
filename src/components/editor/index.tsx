'use client';

interface EditorProps {
    value: string;
    onChange: (value: string) => void;
    readOnly?: boolean;
}

export default function Editor({
    value,
    onChange,
    readOnly = false,
}: EditorProps) {
    return (
        <div className="quill-editor">
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                readOnly={readOnly}
                className="w-full h-64 p-2 border rounded resize-none"
                placeholder="내용을 입력하세요..."
            />
        </div>
    );
}
