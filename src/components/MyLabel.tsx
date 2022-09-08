import './mylabel.css';

export interface MyLabelProps {
    /**
     * Contenido del mensaje que que se mostrara en la etiqueta o label
    */
    label: string;
    /**
     * Tamaño que tendra la etiqueta o label
    */
    size: "normal" | 'h1' | 'h2' | 'h3';
    /**
     * Texto en Mayuscula 
    */
   allCaps: boolean;
   /**
     * Texto en Mayuscula 
    */
   color: 'primary'| 'secondary' | 'tertiary';
    /**
     * Custom font color
    */
   fontColor?: string;
    /**
     * Custom background color
    */
   backgroundColor?: string;

}


export const MyLabel = ({ 
    label = "No label", 
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor,
    backgroundColor = "transparent"
}: MyLabelProps) => {
  
    return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor, backgroundColor}}>
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
