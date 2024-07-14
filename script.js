let a = "बीज बितरण योजना";
let b = "बाल शिक्षा योजना";
let c = "पशुधन योजना";
let d = "वर्मी कम्पोस्ट रोजगार योजना";
let e = "किसान मशीनरी योजना";
let f = "Brain Tech Group";
setTimeout(container1,4598);

function container1(){
    let text = document.getElementById('text').innerText;
    if(text == a)
        {
            document.getElementById('text').innerHTML = text.replace(a,b);
            document.getElementById('incircle').style.backgroundImage = "url(https://res.cloudinary.com/dts528npw/image/upload/v1720887804/book_iffjeu.jpg)";
        }
    else if(text == b)
    {
        document.getElementById('text').innerHTML = text.replace(b,c);
        document.getElementById('incircle').style.backgroundImage = "url(https://res.cloudinary.com/dts528npw/image/upload/v1720887803/cows_jfnumu.jpg)";
    }
    else if(text == c)
    {
        document.getElementById('text').innerHTML = text.replace(c,d);
        document.getElementById('incircle').style.backgroundImage = "url(https://res.cloudinary.com/dts528npw/image/upload/v1720887803/compost_avtedh.jpg)";
    }
    else if(text == d)
    {
        document.getElementById('text').innerHTML = text.replace(d,e);
        document.getElementById('incircle').style.backgroundImage = "url(https://res.cloudinary.com/dts528npw/image/upload/v1720887806/machine_pn3kwa.jpg)";
    }
    else if(text == e)
    {
        document.getElementById('text').innerHTML = text.replace(e,f);
        document.getElementById('incircle').style.backgroundImage = "url(https://res.cloudinary.com/dts528npw/image/upload/v1720887805/brainTech_iy43fp.jpg)";
    }
    else if(text == f)
    {
        document.getElementById('text').innerHTML = text.replace(f,a);
        document.getElementById('incircle').style.backgroundImage = "url(https://res.cloudinary.com/dts528npw/image/upload/v1720887805/images_s4kp3r.jpg)";
    }
    setTimeout(container1,4598);
}
