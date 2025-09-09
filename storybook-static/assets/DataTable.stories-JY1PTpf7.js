import{j as s}from"./jsx-runtime-CDt2p4po.js";import{r as x}from"./index-GiUgBvb1.js";import{c as S}from"./clsx-2dOUpm6k.js";const L=({data:n,columns:o,loading:W=!1,selectable:c=!1,onRowSelect:d})=>{const[t,M]=x.useState(null),[i,f]=x.useState(new Set),b=x.useMemo(()=>{let e=[...n];return t!==null&&e.sort((a,r)=>a[t.key]<r[t.key]?t.direction==="asc"?-1:1:a[t.key]>r[t.key]?t.direction==="asc"?1:-1:0),e},[n,t]),V=e=>{let a="asc";t&&t.key===e&&t.direction==="asc"&&(a="desc"),M({key:e,direction:a})},z=e=>{const a=new Set(i);if(a.has(e)?a.delete(e):a.add(e),f(a),d){const r=n.filter(h=>a.has(h.id));d(r)}},O=e=>{const a=new Set;if(e.target.checked&&n.forEach(r=>a.add(r.id)),f(a),d){const r=n.filter(h=>a.has(h.id));d(r)}};return s.jsx("div",{className:"overflow-x-auto rounded-lg border border-gray-200",children:s.jsxs("table",{className:"min-w-full divide-y-2 divide-gray-200 bg-white text-sm",children:[s.jsx("thead",{className:"bg-gray-50",children:s.jsxs("tr",{children:[c&&s.jsx("th",{className:"px-4 py-2",children:s.jsx("div",{className:"flex items-center justify-center",children:s.jsx("input",{type:"checkbox",className:"h-4 w-4",onChange:O,checked:i.size===n.length&&n.length>0,"aria-label":"Select all rows"})})}),o.map(e=>s.jsx("th",{className:"whitespace-nowrap px-4 py-2  text-gray-900 text-left",children:s.jsxs("div",{className:S("flex items-center",e.sortable&&"cursor-pointer select-none"),onClick:()=>e.sortable&&V(e.dataIndex),children:[e.title,e.sortable&&s.jsx("span",{className:"ml-2",children:(t==null?void 0:t.key)===e.dataIndex?t.direction==="asc"?"▲":"▼":"⇅"})]})},e.key))]})}),s.jsx("tbody",{className:"divide-y divide-gray-200",children:W?s.jsx("tr",{children:s.jsx("td",{colSpan:o.length+(c?1:0),className:"text-center py-8 text-gray-500",children:"Loading..."})}):b.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:o.length+(c?1:0),className:"text-center py-8 text-gray-500",children:"No data available."})}):b.map(e=>s.jsxs("tr",{className:S("hover:bg-gray-50",i.has(e.id)&&"bg-blue-50"),children:[c&&s.jsx("td",{className:"px-4 py-2",children:s.jsx("div",{className:"flex items-center justify-center",children:s.jsx("input",{type:"checkbox",className:"h-4 w-4",checked:i.has(e.id),onChange:()=>z(e.id),"aria-label":`Select row ${e.id}`})})}),o.map(a=>s.jsx("td",{className:"whitespace-nowrap px-4 py-2 text-gray-700",children:e[a.dataIndex]!==void 0&&e[a.dataIndex]!==null?String(e[a.dataIndex]):""},a.key))]},e.id))})]})})};L.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column",elements:[{name:"T"}],raw:"Column<T>"}],raw:"Column<T>[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRows: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"selectedRows"}],return:{name:"void"}}},description:""}}};const y=[{key:"name",title:"Name",dataIndex:"name",sortable:!0},{key:"age",title:"Age",dataIndex:"age",sortable:!0},{key:"role",title:"Role",dataIndex:"role"}],P=[{id:1,name:"John Doe",age:32,role:"Developer"},{id:2,name:"Jane Smith",age:28,role:"Designer"},{id:3,name:"Sam Wilson",age:45,role:"Project Manager"},{id:4,name:"Alice Johnson",age:38,role:"QA Engineer"}],F={title:"Components/DataTable",component:L,tags:["autodocs"],argTypes:{loading:{control:"boolean"},selectable:{control:"boolean"}}},l={args:{columns:y,data:P}},m={args:{...l.args,selectable:!0}},u={args:{columns:y,loading:!0,data:[]}},p={args:{columns:y,data:[]}},g={name:"Sortable Columns",args:{...l.args}};var j,N,v;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: data
  }
}`,...(v=(N=l.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var w,T,k;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectable: true
  }
}`,...(k=(T=m.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var I,D,C;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    columns: columns,
    loading: true,
    data: []
  }
}`,...(C=(D=u.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var A,E,q;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: []
  }
}`,...(q=(E=p.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var R,_,J;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Sortable Columns",
  args: {
    ...Default.args
  }
}`,...(J=(_=g.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};const G=["Default","Selectable","Loading","Empty","WithSorting"];export{l as Default,p as Empty,u as Loading,m as Selectable,g as WithSorting,G as __namedExportsOrder,F as default};
