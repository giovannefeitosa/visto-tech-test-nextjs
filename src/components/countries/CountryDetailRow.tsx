interface Props {
    label: string;
    value: string | JSX.Element;
}

export function CountryDetailRow({
    label,
    value,
}: Props) {
    return (
        <div
            className='flex text-xs p-2 bg-white mb-2 shadow-md rounded-sm'
        >
            <span
                className='w-28 flex-none text-slate-500'
            >{label}</span>
            <span
                className='flex-1 text-right'
            >{value}</span>
        </div>
    );
}