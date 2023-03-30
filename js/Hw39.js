const smile = document.querySelectorAll('#smile')
        const numCount = document.querySelectorAll('.numCount')

        smile.forEach((x, i)=> {
            let count = 0;
            x.addEventListener('click', () => {
                count++;
                numCount[i].textContent = count
            })
        })