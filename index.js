    let dayList = document.querySelector('.days');
    let monthName = document.querySelector('.month-name');
    let yearName = document.querySelector('.year');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');

    // lets create an Date object

    let dt = new Date();
    let month = dt.getMonth()+1 //as it will return value between 0-11 so to make it 1-12 we add 1 to it
    let year = dt.getFullYear();
    let currentDay = dt.getDate();

    // create an array of month name to map with the month value we obtained using getMonth()
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


    // now lets handle the previous button click
    prev.addEventListener('click',event=>{
        if(month===1){
            month =12;
            month-=1;
        }else{
            month-=1;
        }
        calendar();
    })

    // now lets handle the previous button click
    next.addEventListener('click',event=>{
        if(month===12){
            month =1;
            month+=1;
        }else{
            month+=1;
        }
        calendar();
    })
    // now lets make a calendar function

    const calendar = ()=>{
        monthName.innerHTML = monthNames[month-1];
        yearName.innerHTML = year;
        dayList.innerHTML = ''
        
        daysInMonth = new Date(year, month, 0).getDate(); //get toatl number of days in a particular month

        // get day number at which the current month start (0 for sunday, 6 for saturday)

        dayNumber = new Date(year,month-1,1).getDay();
        let gaps
        if (dayNumber === 0) {
            gaps = 6
        }else{
            gaps = dayNumber - 1;
            // Ex:: if it is monday dayNumber = 1, so gaps = 1-1 = 0;
            // if it is thursdat dayNumber = 4, so gaps = 4-1 = 3;
        }

        for(day = -gaps + 1 ;day<=daysInMonth; day++){
            const days = document.createElement('li');
            if(day<=0){
                days.innerHTML = "";
                dayList.appendChild(days);
            } else if (day===currentDay&&month===dt.getMonth()+1 && year===dt.getFullYear()){
                //make this date as active as it is current date i.e. today
                days.setAttribute('class','active');
                days.innerHTML = day;
                dayList.appendChild(days)
            }
            else{
                days.innerHTML = day;
                dayList.appendChild(days);
            }
        }
    }