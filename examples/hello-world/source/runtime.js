const instances=new Map();
function createInstance(id,kind,vars={}){const instance={id,kind,vars,createdAt:Date.now()};instances.set(id,instance);return instance;}
const click=createInstance("hello.click","event",{progress:0});
document.getElementById("hello-button").addEventListener("click",()=>{click.vars.progress=1;document.getElementById("hello-status").textContent="Hello World · instance CINE active";});
