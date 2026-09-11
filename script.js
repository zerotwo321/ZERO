const master=document.getElementById('master');
const status=document.getElementById('status');
const statusText=document.getElementById('statusText');
const features=[...document.querySelectorAll('.feature')];

function setMaster(on){
  master.classList.toggle('on',on);
  status.className='status '+(on?'on':'off');
  status.textContent=on?'ONLINE':'OFFLINE';
  statusText.textContent=on?'Panel aktif.':'Panel belum diaktifkan.';
  features.forEach(b=>b.disabled=!on);
}
setMaster(false);

master.addEventListener('click',()=>setMaster(!master.classList.contains('on')));

features.forEach(button=>{
  button.addEventListener('click',()=>{
    if(button.disabled)return;
    button.classList.toggle('active');
    button.querySelector('i').textContent=button.classList.contains('active')?'ON':'OFF';
  });
});
