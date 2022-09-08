import{j as n}from"./jsx-runtime.1ac7b41d.js";import"./iframe.0e1d0871.js";const o=({label:e="No label",size:a="normal",allCaps:t=!1,color:s="primary",fontColor:c})=>n("span",{className:`label ${a} text-${s}`,style:{color:c},children:t?e.toUpperCase():e});try{o.displayName="MyLabel",o.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No label"},description:"Contenido del mensaje que que se mostrara en la etiqueta o label",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Tama\xF1o que tendra la etiqueta o label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Texto en Mayuscula",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Texto en Mayuscula",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Custom font color",name:"fontColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/MyLabel.tsx#MyLabel"]={docgenInfo:o.__docgenInfo,name:"MyLabel",path:"src/components/MyLabel.tsx#MyLabel"})}catch{}const u={parameters:{storySource:{source:`import { MyLabel } from "../../components/MyLabel";\r
import { ComponentMeta, ComponentStory } from '@storybook/react';\r
\r
export default {\r
    title: 'UI/MyLabel',\r
    component: MyLabel,\r
    argTypes:{\r
        size: { control: 'select' },\r
        color: { control: 'select' },\r
        fontColor: { control: 'color'}\r
    }\r
} as ComponentMeta<typeof MyLabel>\r
\r
const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel {...args} />\r
\r
export const Basic = Template.bind({});\r
Basic.args = {\r
    size:"normal",\r
    allCaps: false \r
}\r
\r
export const AllCaps = Template.bind({});\r
AllCaps.args = {\r
    size:'normal',\r
    allCaps: true\r
}\r
\r
\r
export const Secondary = Template.bind({});\r
\r
Secondary.args ={\r
    size:'normal',\r
    color: 'secondary',\r
}\r
\r
export const Tertiary = Template.bind({});\r
Tertiary.args ={\r
    size:'normal',\r
    color: 'tertiary',\r
}\r
\r
export const CustomFontColor = Template.bind({});\r
Tertiary.args ={\r
    size:'h1',\r
    fontColor: '#512486',\r
}`,locationsMap:{basic:{startLoc:{col:49,line:14},endLoc:{col:82,line:14},startBody:{col:49,line:14},endBody:{col:82,line:14}},"all-caps":{startLoc:{col:49,line:14},endLoc:{col:82,line:14},startBody:{col:49,line:14},endBody:{col:82,line:14}},secondary:{startLoc:{col:49,line:14},endLoc:{col:82,line:14},startBody:{col:49,line:14},endBody:{col:82,line:14}},tertiary:{startLoc:{col:49,line:14},endLoc:{col:82,line:14},startBody:{col:49,line:14},endBody:{col:82,line:14}},"custom-font-color":{startLoc:{col:49,line:14},endLoc:{col:82,line:14},startBody:{col:49,line:14},endBody:{col:82,line:14}}}}},title:"UI/MyLabel",component:o,argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}},r=e=>n(o,{...e}),i=r.bind({});i.args={size:"normal",allCaps:!1};const d=r.bind({});d.args={size:"normal",allCaps:!0};const p=r.bind({});p.args={size:"normal",color:"secondary"};const l=r.bind({});l.args={size:"normal",color:"tertiary"};const b=r.bind({});l.args={size:"h1",fontColor:"#512486"};const f=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{d as AllCaps,i as Basic,b as CustomFontColor,p as Secondary,l as Tertiary,f as __namedExportsOrder,u as default};
//# sourceMappingURL=MyLabel.stories.ee73087e.js.map
