const arr = [1, 2, 3, [1, 2]]

function generateList(array) {
    const ul = document.createElement('ul');
    document.body.append(ul);
    const len = arr.length;

    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li')
        ul.append(li)
        if (Array.isArray(arr[i])) {
            const ul = document.createElement('ul');
            li.append(ul);
            for (let k = 0; k < arr[i].length; k++) {
                const li = document.createElement('li')
                ul.append(li)
                li.textContent = arr[i][k]
            }
        } else {
            li.textContent = arr[i];
        }
    }

}
generateList(arr)