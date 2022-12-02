let circle = document.getElementById("circle");
            let upBtn = document.getElementById("upBtn");
            let downBtn = document.getElementById("downBtn");

            let rotateValue = circle.style.transform;
            let rotateSum;
           //Up Arrow
            upBtn.onclick = function()
            {
                rotateSum = rotateValue + "rotate(-90deg)";

                circle.style.transform = rotateSum;
                rotateValue = rotateSum;
            }
            //Down Arrow
            downBtn.onclick = function()
            {
                rotateSum = rotateValue + "rotate(+90deg)";
                circle.style.transform = rotateSum;
                rotateValue = rotateSum;
            }