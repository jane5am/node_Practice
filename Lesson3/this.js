console.log(this); // anonymous의 this는 global이 아니다. {} 빈 객체가 나온다
                //왜? this === module.exports === {} 이기 때문에

// 단 function안에 this는 global이다
function a () {
    console.log(this === global); // true
}

a();