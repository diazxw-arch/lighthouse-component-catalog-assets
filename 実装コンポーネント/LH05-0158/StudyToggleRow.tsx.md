import {useId,type Ref} from 'react';
import {Switch} from '../ui/switch';
import './study-settings.css';
type Props={label:string;checked:boolean;onChange:(checked:boolean)=>void;disabled?:boolean;controlRef?:Ref<HTMLButtonElement>};
export function StudyToggleRow({label,checked,onChange,disabled=false,controlRef}:Props){const id=useId();return <div className="lh-study-toggle-row"><label htmlFor={id}>{label}</label><Switch ref={controlRef} id={id} type="button" checked={checked} disabled={disabled} onCheckedChange={onChange}/></div>;}
