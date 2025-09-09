import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as A}from"./index-GiUgBvb1.js";import{c as h}from"./clsx-2dOUpm6k.js";const s=({id:a,label:m,value:u,onChange:O,placeholder:G,helperText:g,errorMessage:t,disabled:f=!1,invalid:v=!1,loading:c=!1,variant:H="outlined",size:R="md"})=>{const _="w-full transition-colors duration-200 ease-in-out border rounded-md focus:outline-none",k={sm:"px-2 py-1 text-sm",md:"px-3 py-2 text-base",lg:"px-4 py-3 text-lg"},Y={filled:"bg-gray-100 border-transparent focus:bg-white focus:border-blue-500",outlined:"bg-white border-gray-300 focus:border-blue-500",ghost:"bg-transparent border-transparent hover:bg-gray-100 focus:bg-white"},$=h(f&&"cursor-not-allowed bg-gray-200 text-gray-500",(v||!!t)&&"border-red-500 text-red-600 focus:border-red-500",c&&"pointer-events-none opacity-70"),p=a||A.useId();return e.jsxs("div",{className:"w-full",children:[m&&e.jsx("label",{htmlFor:p,className:"block text-sm font-medium text-gray-700 mb-1",children:m}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:u!==void 0?u:void 0,defaultValue:u===void 0?"":void 0,onChange:O,placeholder:G,disabled:f||c,"aria-invalid":v,className:h(_,k[R],Y[H],$,"rounded-md")}),c&&e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3",children:e.jsxs("svg",{className:"animate-spin h-5 w-5 text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:`M4 12a8 8 0 018-8V0C5.373 0 
                   0 5.373 0 12h4zm2 5.291A7.962 
                   7.962 0 014 12H0c0 3.042 1.135 
                   5.824 3 7.938l3-2.647z`})]})})]}),g&&!t&&e.jsx("p",{id:`${p}-desc`,className:"mt-1 text-sm text-gray-500",children:g}),t&&e.jsx("p",{id:`${p}-desc`,className:"mt-1 text-sm text-red-600",children:t})]})};s.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{id:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'ghost'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const P={title:"Components/InputField",component:s,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["filled","outlined","ghost"]},size:{control:{type:"select"},options:["sm","md","lg"]},value:{control:"text"},onChange:{action:"changed"}}},r={args:{label:"Your Name",placeholder:"Enter your name",helperText:"This is a helper text.",variant:"outlined",size:"md"}},l={args:{...r.args,value:"",invalid:!0,errorMessage:"This field is required."}},n={args:{...r.args,value:"Disabled input",disabled:!0}},i={args:{...r.args,loading:!0,value:"Loading..."}},o={render:a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{...a,label:"Filled",variant:"filled",placeholder:"Filled input"}),e.jsx(s,{...a,label:"Outlined",variant:"outlined",placeholder:"Outlined input"}),e.jsx(s,{...a,label:"Ghost",variant:"ghost",placeholder:"Ghost input"})]})},d={render:a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{...a,label:"Small",size:"sm",placeholder:"Small input"}),e.jsx(s,{...a,label:"Medium",size:"md",placeholder:"Medium input"}),e.jsx(s,{...a,label:"Large",size:"lg",placeholder:"Large input"})]})};var x,b,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Your Name',
    placeholder: 'Enter your name',
    helperText: 'This is a helper text.',
    variant: 'outlined',
    size: 'md'
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var T,j,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: '',
    invalid: true,
    errorMessage: 'This field is required.'
  }
}`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var N,w,z;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'Disabled input',
    disabled: true
  }
}`,...(z=(w=n.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var q,F,C;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    value: 'Loading...'
  }
}`,...(C=(F=i.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var S,E,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">\r
      <InputField {...args} label="Filled" variant="filled" placeholder="Filled input" />\r
      <InputField {...args} label="Outlined" variant="outlined" placeholder="Outlined input" />\r
      <InputField {...args} label="Ghost" variant="ghost" placeholder="Ghost input" />\r
    </div>
}`,...(L=(E=o.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var D,V,M;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">\r
      <InputField {...args} label="Small" size="sm" placeholder="Small input" />\r
      <InputField {...args} label="Medium" size="md" placeholder="Medium input" />\r
      <InputField {...args} label="Large" size="lg" placeholder="Large input" />\r
    </div>
}`,...(M=(V=d.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};const Q=["Default","Invalid","Disabled","Loading","Variants","Sizes"];export{r as Default,n as Disabled,l as Invalid,i as Loading,d as Sizes,o as Variants,Q as __namedExportsOrder,P as default};
