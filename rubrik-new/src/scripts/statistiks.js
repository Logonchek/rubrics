let checkbox = document.querySelectorAll('.custom-checkbox')
let _btnAddStat = document.querySelector('.statistics__btnAdd')
let _trafficSum = document.querySelector('.trafficSum')
let _trafficResult = document.querySelector('.trafficResult')
let _trafficResultNumber = document.querySelector('.trafficResult__number')
let _trafficSumMount = document.querySelector('.trafficSum_mount')
let _trafficSumWrapper = document.querySelector('.trafficSumWrapper')
let resultParentForChart = []
let arrTrafik = []
const _filters = document.querySelector('.filters')
const _parent = document.querySelectorAll('.parent')




// раскрытие детей
document.addEventListener('click', e => {
    let children_stat = document.querySelectorAll('.children')
    let children2_stat = document.querySelectorAll('.children2')
    if (e.target.classList.contains('parent__name')) {
        const parentAttr = e.target.getAttribute('data-parent')
        const childAttr = e.target.getAttribute('data-parentChildren')
        children_stat.forEach(elementChildren => {
            const childrenAttr = elementChildren.getAttribute('data-children')
            if (childrenAttr == parentAttr) {
                elementChildren.classList.toggle('childrenShow');
                if (elementChildren.children.length >= 2) {
                    elementChildren.style.cursor = 'pointer'
                }
            }
        });

        if (children2_stat) {
            children2_stat.forEach(elementChildren => {
                const childrenAttr = elementChildren.getAttribute('data-children')
                if (childrenAttr == childAttr) {
                    elementChildren.classList.toggle('childrenShow')
                    elementChildren.style.cursor = 'alias'
                }
            });
        }
    }
})

// считаем перый parent
document.addEventListener('DOMContentLoaded', e => {
    const _parent = document.querySelectorAll('.parent__col')
    const _children = document.querySelectorAll('.children')
    let childrenArrNumber = []
    let childrenArrNumber_slice = []
    let result = [];
    let per = 0
    for (let index = 0; index < _parent.length; index++) {
        const element = _parent[index].children[0].getAttribute('data-parent');
        const elementChild = _children[index].getAttribute('data-children');
        let num = _children[per].children[0].children[1].children
        if (elementChild == element) {
            for (let index = 0; index < num.length; index++) {
                if (index == 5) {
                    per++
                }
                const element = num[index].innerHTML;
                childrenArrNumber.push(Number(element.replace(/\s/g, '')))
            }
            childrenArrNumber_slice.push(childrenArrNumber.splice(0, 6));
        }
    }
    arrSum(result, childrenArrNumber_slice)
})

// поведение кнопки при выбранном чекбоксе
document.addEventListener('click', e => {
    _btnAddStat.style.cursor = 'alias'
    _btnAddStat.style.background = '#7db3e1'
    for (let index = 0; index < checkbox.length; index++) {
        const elCheck = checkbox[index];
        if (elCheck.checked) {
            _btnAddStat.style.cursor = 'pointer'
            _btnAddStat.style.background = '#3b8dd2'
        }
    }
})

//правильная работа чекбоксов при нажатии
document.addEventListener('click', e => {
    let _input = document.getElementsByTagName("input")
    const checkParentAttr = e.target.getAttribute('data-parentCheck')
    const checkChildAttrClick = e.target.getAttribute('data-check')
    if (checkParentAttr != undefined & checkParentAttr != null & e.target.checked == false) {
        for (let index = 0; index < _input.length; index++) {
            const checkChild = _input[index];
            const checkChildAttr = _input[index].getAttribute('data-check');
            if (checkParentAttr == checkChildAttr) {
                checkChild.checked = false
                _btnAddStat.style.background = '#7db3e1'
            }
        }
    }
    if (checkParentAttr != undefined & checkParentAttr != null & e.target.checked == true) {
        for (let index = 0; index < _input.length; index++) {
            const checkChild = _input[index];
            const checkChildAttr = _input[index].getAttribute('data-check');
            if (checkParentAttr == checkChildAttr) {
                checkChild.checked = true

            }
        }
    }
    if (checkChildAttrClick) {
        for (let index = 0; index < _input.length; index++) {
            const checkChild = _input[index];
            const checkChildAttr = _input[index].getAttribute('data-check');
            if (checkChildAttrClick == checkChildAttr) {
                if (checkChild.checked == false) {
                    let ddd = document.querySelector(`[data-parentCheck="${checkChildAttr}"]`)
                    ddd.checked = false

                }
            }
        }
    }
})

_btnAddStat.addEventListener('click', () => {
    _trafficSumMount.style.display = 'grid'
    arrTrafik = []
    // перебираем все чекбоксы
    for (let index = 0; index < checkbox.length; index++) {
        let obgTrafik = {}
        let valueCheck = []
        let arrNumber = []
        const elCheck = checkbox[index];

        // проверяем если чекбокс поставлен
        if (elCheck.checked) {
            let alCheckAttr = elCheck.getAttribute('valueCheck')
            // находим аттрибут - проверям если если его нет в массиве то добавляем 
            if (valueCheck.indexOf(alCheckAttr) == -1) {
                valueCheck.push(alCheckAttr)
                // находим все цифры данной колонки
                let elNumber = elCheck.parentNode.nextElementSibling.children
                for (let index = 0; index < elNumber.length; index++) {
                    const element = elNumber[index].innerHTML.replace(/\s/g, '');
                    elNumberType = Number(element)
                    // добавляем вы цыфры в предварительны массив
                    arrNumber.push(elNumberType.toLocaleString())
                }
                // собираем обьект
                obgTrafik['title'] = elCheck.name;
                obgTrafik['number'] = [arrNumber];
                obgTrafik['id'] = alCheckAttr;
                arrTrafik.push(obgTrafik)
            }
            // дочерние элементы которые создаются в функции  uselTraffic
            let trafficTable = document.querySelectorAll('.trafficSum__table')

            // arrTrafik массив с обьектов данных для генерации узла
            arrTrafik.forEach(el => {
                for (let index = 0; index < trafficTable.length; index++) {
                    const element = trafficTable[index];
                    element.remove()
                }
                uselTraffic(el.title, el.number, el.id)
            })
            F_trafficResultNumber(arrTrafik)
            // показать таблицу с суммированием
        }

    }


})

//  удалить элемент из трафика
document.addEventListener('click', e => {
    if (e.target.classList.contains('traffic__close')) {

        let closeAttr = e.target.parentNode.getAttribute('trafficClose')
        let newArrTrahfik = arrTrafik.filter(el => el.id != closeAttr)
        // дочерние элементы которые создаются в функции  uselTraffic
        let trafficTable = document.querySelectorAll('.trafficSum__table')

        // удаляем из дом дерева последний элемент
        if (newArrTrahfik.length == 0) {
            // !повторяющийся код
            for (let index = 0; index < trafficTable.length; index++) {
                const element = trafficTable[index];
                element.remove()
                arrTrafik = newArrTrahfik
                _trafficSumWrapper.style.display = 'none'
            }
        }
        // удаляем из дом дерева элемент
        newArrTrahfik.forEach(el => {
            for (let index = 0; index < trafficTable.length; index++) {
                const element = trafficTable[index];
                element.remove()
                arrTrafik = newArrTrahfik
            }

            uselTraffic(el.title, el.number, el.id)
        })

        F_trafficResultNumber(newArrTrahfik)
    }
})

// создание узла ДОМ трафка
function uselTraffic (title, number, id) {
    const trafficSumCreate = document.createElement("div");

    const divNumber = document.createElement("div");
    divNumber.className = 'traffic__number'
    trafficSumCreate.className = 'trafficSum__table'
    trafficSumCreate.setAttribute('trafficClose', id)
    trafficSumCreate.innerHTML = `
            <img class='traffic__close' src="https://www.pulscen.ru/system/ckeditor_assets/pictures/219819/content_cancel.png">
            <div class='traffic__title'>${title}</div>
            `
    for (let index = 0; index < number[0].length; index++) {
        const element = number[0][index];
        pTag = document.createElement('p');
        pTag.innerHTML = element
        divNumber.appendChild(pTag);
        trafficSumCreate.appendChild(divNumber)
    }
    _trafficSum.appendChild(trafficSumCreate)
}

//суммирование добавленного трафика
function F_trafficResultNumber (arr) {
    let _trafficResultNumberItem = document.querySelectorAll('.trafficResultNumber__item')
    let arrResult = []
    let result = [];

    for (let indexString = 0; indexString < arr.length; indexString++) {
        const element = arr[indexString].number[0];
        arrResult.push(element)
    }

    for (let i = 0; i < arrResult.length; i++) {
        let subarr = arrResult[i];
        for (let j = 0; j < subarr.length; j++) {
            if (result[j] == undefined)
                result[j] = 0;
            result[j] += Number(subarr[j].replace(/\s/g, ''));
        }
    }
    if (_trafficResultNumberItem.length >= 1) {
        for (let index = 0; index < _trafficResultNumberItem.length; index++) {
            const element = _trafficResultNumberItem[index];
            element.remove()
        }
    }
    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        pTag = document.createElement('p');
        pTag.className = "trafficResultNumber__item"
        pTag.innerHTML = element.toLocaleString()
        _trafficResultNumber.appendChild(pTag);
    }
    _trafficSumWrapper.style.display = 'grid'
    if (arr.length == 0) {
        _trafficSumWrapper.style.display = 'none'
    }
}

//суммирование главных родителей
document.addEventListener('click', e => {
    const tabs = document.querySelector('.tabs').children
    let childrenArrNumber_slice = []
    let childrenArrNumber = []
    let newArr = []

    for (let index = 0; index < tabs.length; index++) {
        const element = tabs[index];
        //считаем в той вкладке на которую нажали
        if (e.target.id == element.getAttribute('data-tab')) {
            if (e.target.id != 'all') {

                let currentRubrik = element.children[2].children

                //отбор нужных строк
                for (let index = 0; index < currentRubrik.length; index++) {
                    const elementNumber = currentRubrik[index];
                    if (elementNumber.classList.contains('parent')) {
                        elementNumber = currentRubrik[index].children[0].children[1].children;
                        newArr.push(elementNumber)
                    }
                }
            }
        }
    }
    // суммирование сток
    for (let index = 0; index < newArr.length; index++) {
        const elementNumberSlice = newArr[index];
        for (let index = 0; index < elementNumberSlice.length; index++) {
            const element = elementNumberSlice[index].innerHTML;
            childrenArrNumber.push(Number(element.replace(/\s/g, '')))
        }
        childrenArrNumber_slice.push(childrenArrNumber.splice(0, 6));
    }
    arrSum(resultParentForChart, childrenArrNumber_slice)
})

// логика переключения табов
document.addEventListener('click', e => {
    const tabs = document.querySelector('.tabs').children
    // при клике на таб обнуляем фильтры и скрываем вывод суммирования
    if (e.target.className == 'adjustable__item' || e.target.className == 'all__btn') {
        elementDefault()
    }
    // -------
    let titleTab = e.target.id
    // let elementTab = document.querySelector(`[data-tab="${titleTab}"]`).children[2].children
    // // нашли все parent данной категории 
    // let parentArr = Array.from(elementTab).filter(e => e.classList.contains("parent"))
    // let arrNum = []
    // let childrenArrNumber_slice = []
    // let result = []
    // parentArr.forEach(element => {
    //     let curentPerentAtr = element.children[0].children[0].getAttribute('data-parent')
    //     let childrenArr = Array.from(element.children).filter(e => e.classList.contains("children"))
    //     for (let index = 0, index2 = 1; index < childrenArr.length; index++) {
    //         // debugger
    //         const element = childrenArr[index];
    //         if (element.getAttribute('data-children') == childrenArr[index].getAttribute('data-children')) {
    //             let number = element.children[0].children[1].children
    //             Array.from(number).forEach(element => {
    //                 arrNum.push(Number(element.innerHTML.replace(/\s/g, '')))
    //             });
    //         }
    //         if (index <= index2) {
    //             if (element.getAttribute('data-children') == childrenArr[index2].getAttribute('data-children')) {
    //             } else {
    //                 arrNum = []
    //             }
    //             if (childrenArr.length - 1 > index2) {
    //                 index2++
    //             }
    //         }
    //     }

    //     childrenArrNumber_slice.push(arrNum.splice(0, 6));

    //     console.log(`arrNum`, childrenArrNumber_slice);
    // });
    // arrSum(result, childrenArrNumber_slice)
    // for (let index = 0; index < childrenArrNumber_slice.length; index++) {
    //     const elementtt = childrenArrNumber_slice[index];
    //     for (let j = 0; j < elementtt.length; j++) {
    //         if (result[j] == undefined)
    //             result[j] = 0;
    //         result[j] += elementtt[j];
    //     }
    // }
    // parentArr.forEach(element => {
    //     let parentArr = element.children[0].children
    //     let needParent = Array.from(parentArr).filter(e => e.classList.contains("parent__numbers"))
    //     Array.from(needParent[0].children).forEach(element => {
    //         for (let index = 0; index < result.length; index++) {
    //             if (index == 0) {
    //                 const element2 = result[index];
    //                 element.innerHTML = element2.toLocaleString()
    //             }
    //         }
    //     });
    // })

    // console.log(`result`, result);


    for (let index = 0; index < tabs.length; index++) {
        const currentTabAttr = tabs[index].getAttribute('data-tab');
        const currentTab = tabs[index]
        if (currentTabAttr == titleTab) {
            _btnAddStat.style.display = 'block'
            _parent.forEach(parentElement => {
                parentElement.style.display = 'grid'
            });
            _filters.style.display = 'grid'
            if (currentTabAttr == "all") {
                _filters.style.display = 'none'
                _btnAddStat.style.display = 'none'
            }
            for (let index = 0; index < tabs.length; index++) {
                const element = tabs[index];
                element.style.display = 'none'
            }
            currentTab.style.display = 'block'
        }
    }
})

// логика фильтров
_filters.addEventListener('click', e => {
    arrTrafik = []
    // берем текущий select и запоминаем
    currentSection = e.target.options.selectedIndex;
    elementDefault()
    // выставляем section option на который нажали изначально
    e.target.options.selectedIndex = currentSection

    // перебираем всех родителей что бы в статистике показать нужные строки
    _parent.forEach(parentElement => {
        parentElement.style.display = 'none'
        // перебираем все классы у этих родителей
        for (let index = 0; index < parentElement.classList.length; index++) {
            const element = parentElement.classList[index];
            // если section option на который нажали собпадает с классом родителя то
            if (e.target.value == element || e.target.value == 'all') {
                parentElement.style.display = 'grid'
            }
        }
    });
})

// суммирование нескольких  массивов
function arrSum (result, arr) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        for (let j = 0; j < element.length; j++) {
            if (result[j] == undefined)
                result[j] = 0;
            result[j] += element[j];
        }
    }
}

function elementDefault () {
    const _filtersSection = document.querySelectorAll('.filters__section')
    const allInput = document.getElementsByTagName('input')
    //обнуление фильтров
    _filtersSection.forEach(optionReset => {
        optionReset.options.selectedIndex = optionReset.options.selectedIndex[0]
    })
    //обнуление чекбоксов
    Array.from(allInput).forEach(element => {
        element.checked = false;
    });
    _trafficSumWrapper.style.display = 'none'
}

// графики

let labelsArr = [
    'янв.21',
    'фев.21',
    'мар.21',
    'апр.21',
    'май.21',
    'июн.21',
],

const materialChart = new Chart(
    document.getElementById('materialChart'),
    config = {
        type: 'bar',
        data: {
            labels: labelsArr,
            datasets: [{
                label: 'статистика',
                backgroundColor: '#3B8DD2',
                data: resultParentForChart,
                // categoryPercentage: 0.7,
            }],
        },

        options: {
            scales: {
                y: {
                    ticks: {
                        display: false,
                        backdropColor: 'rgba(255, 0, 120, 0.75)',
                        color: "blue",
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                        padding: 20
                    },
                    weight: 20

                },
                x: {
                    grid: {
                        display: false,
                        tickLength: 8,
                        tickWidth: 9,
                        padding: 20
                    },
                    weight: 20

                },

            }
        },
    },
);
const equipmentChart = new Chart(
    document.getElementById('equipmentChart'),
    config = {
        type: 'bar',
        data: {
            labels: labelsArr,
            datasets: [{
                label: 'статистика',
                backgroundColor: '#3B8DD2',
                data: resultParentForChart,
            }],
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        display: false,
                        backdropColor: 'rgba(255, 0, 120, 0.75)',
                        color: "blue"
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                },
                x: {
                    grid: {
                        display: false,
                        tickLength: 8,
                        tickWidth: 9,
                    },

                },

            }
        },
    },
);

// const goodsChart = new Chart(
//     document.getElementById('goodsChart'),
//     config = {
//         type: 'bar',
//         data: {
//             labels: labelsArr,
//             datasets: [{
//                 label: 'статистика',
//                 backgroundColor: '#3B8DD2',
//                 data: resultParentForChart,
//             }],
//         },
//         options: {
//             scales: {
//                 y: {
//                     ticks: {
//                         display: false,
//                         backdropColor: 'rgba(255, 0, 120, 0.75)',
//                         color: "blue"
//                     },
//                     grid: {
//                         display: false,
//                         drawBorder: false
//                     },
//                 },
//                 x: {
//                     grid: {
//                         display: false,
//                         tickLength: 8,
//                         tickWidth: 9,
//                     },

//                 },

//             }
//         },
//     },
// );

// const foodChart = new Chart(
//     document.getElementById('foodChart'),
//     config = {
//         type: 'bar',
//         data: {
//             labels: labelsArr,
//             datasets: [{
//                 label: 'статистика',
//                 backgroundColor: '#3B8DD2',
//                 data: resultParentForChart,
//             }],
//         },
//         options: {
//             scales: {
//                 y: {
//                     ticks: {
//                         display: false,
//                         backdropColor: 'rgba(255, 0, 120, 0.75)',
//                         color: "blue"
//                     },
//                     grid: {
//                         display: false,
//                         drawBorder: false
//                     },
//                 },
//                 x: {
//                     grid: {
//                         display: false,
//                         tickLength: 8,
//                         tickWidth: 9,
//                     },

//                 },

//             }
//         },
//     },
// );

// const buildChart = new Chart(
//     document.getElementById('buildChart'),
//     config = {
//         type: 'bar',
//         data: {
//             labels: labelsArr,
//             datasets: [{
//                 label: 'статистика',
//                 backgroundColor: '#3B8DD2',
//                 data: resultParentForChart,
//             }],
//         },
//         options: {
//             scales: {
//                 y: {
//                     ticks: {
//                         display: false,
//                         backdropColor: 'rgba(255, 0, 120, 0.75)',
//                         color: "blue"
//                     },
//                     grid: {
//                         display: false,
//                         drawBorder: false
//                     },
//                 },
//                 x: {
//                     grid: {
//                         display: false,
//                         tickLength: 8,
//                         tickWidth: 9,
//                     },

//                 },

//             }
//         },
//     },
// );

const transportChart = new Chart(
    document.getElementById('transportChart'),
    config = {
        type: 'bar',
        data: {
            labels: labelsArr,
            datasets: [{
                label: 'статистика',
                backgroundColor: '#3B8DD2',
                data: resultParentForChart,
            }],
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        display: false,
                        backdropColor: 'rgba(255, 0, 120, 0.75)',
                        color: "blue"
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                },
                x: {
                    grid: {
                        display: false,
                        tickLength: 8,
                        tickWidth: 9,
                    },

                },

            }
        },
    },
);



