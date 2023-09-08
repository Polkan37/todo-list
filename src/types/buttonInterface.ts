export interface ButtonProps {
    text: string;
    color?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void;
}