

const ATI_CATEGORIES = {
    regions_list: [
        {
            title: 'Все регионы',
            id: 1
        },
        {
            title: 'Казахстан',
            id: 2
        },
        {
            title: 'Беларусь',
            id: 2
        },
        {
            title: 'Поволжье',
            id: 2
        },
        {
            title: 'Приуралье',
            id: 2
        },
        {
            title: 'Северо-Запад',
            id: 2
        },
        {
            title: 'Дальний Восток',
            id: 2
        },
        {
            title: 'Сибирь',
            id: 2
        },
        {
            title: 'УрФО',
            id: 2
        },
        {
            title: 'Центр',
            id: 2
        },
        {
            title: 'Юг',
            id: 2
        },
    ],
    clasters_list: [
        {
            title: 'Name1',
            id: 1
        },
        {
            title: 'Name2',
            id: 2
        }
    ],
    ad_statistics_list: [
        {
            title: 'Name1',
            id: 1
        },
        {
            title: 'Name2',
            id: 2
        }
    ],
    chart: [
        {
            date: "2021-01",	// формат YYYY-MM
            value: 2000 			// это само значение для графика
        },
        {
            date: "2021-02",
            value: 5000
        },
        {
            date: "2021-03",
            value: 2000
        },
        {
            date: "2021-04",
            value: 1000
        },
        {
            date: "2021-05",
            value: 500
        },
    ],
    table: [
        {
            title: "GROUP NAME 1",
            total: 5800,
            values: [
                {
                    date: "2021-01",
                    value: 1800
                },
                {
                    date: "2021-02",
                    value: 1100
                },
                {
                    date: "2021-03",
                    value: 4100
                },
                {
                    date: "2021-04",
                    value: 2400
                },
            ],
            childs: [
                {
                    title: "SUB GROUP NAME 1", //
                    total: 8600,
                    values: [
                        {
                            date: "2021-01",
                            value: 150
                        },
                        {
                            date: "2021-02",
                            value: 410
                        },
                    ],
                    childsT: [
                        {
                            title: "SUB SUB GROUP NAME 1",
                            total: 3600,
                            values: [
                                {
                                    date: "2021-01",
                                    value: 260
                                },
                                {
                                    date: "2021-02",
                                    value: 610
                                },
                            ],
                        }
                    ],
                }

            ]
        },
        {
            title: "GROUP NAME 2",
            total: 9800,
            values: [
                {
                    date: "2021-01",
                    value: 1500
                },
                {
                    date: "2021-02",
                    value: 5100
                },
                {
                    date: "2021-03",
                    value: 6100
                },
                {
                    date: "2021-04",
                    value: 3400
                },
            ],
            childs: [
                {
                    title: "SUB GROUP NAME 2",
                    total: 3600,
                    values: [
                        {
                            date: "2021-01",
                            value: 260
                        },
                        {
                            date: "2021-02",
                            value: 610
                        },
                    ],
                    childsT: [
                        {
                            title: "SUB SUB GROUP NAME 2",
                            total: 3600,
                            values: [
                                {
                                    date: "2021-01",
                                    value: 260
                                },
                                {
                                    date: "2021-02",
                                    value: 610
                                },
                            ],
                        }
                    ],
                }
            ]
        },
    ]
}

export default ATI_CATEGORIES
