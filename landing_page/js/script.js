const nav_con=document.querySelector('.nav_container'),
question=document.querySelectorAll('.question');
document.onscroll=()=>{
    nav_con.classList.toggle('nav_toggle',(window.scrollY>10));
}

question.forEach(q=>{
q.onclick=()=>{
    q.classList.toggle('open');
    var icon=q.querySelector('.icon svg');
    icon.classList.toggle('fa-minus');
    icon.classList.toggle('fa-plus')
}
})

const show_nav=document.querySelector('.close_icon .show'),
close_nav=document.querySelector('.close_icon .close');
show_nav.onclick=()=>{
    document.querySelector('.show').classList.toggle('none');
    document.querySelector('.close').classList.toggle('none');
    document.querySelector('.nav_item').style.display='flex';
}
close_nav.onclick=()=>{
    document.querySelector('.show').classList.toggle('none');
    document.querySelector('.close').classList.toggle('none');
    document.querySelector('.nav_item').style.display='none';
}
    