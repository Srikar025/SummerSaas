interface InputProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}
export function Input({ placeholder, value, onChange }: InputProps) {
    return <div>
        <input placeholder={placeholder} value={value} onChange={onChange} type={"text"} className="px-4 py-2 border border-white rounded-xl opacity-60 m-2" />


    </div>

}