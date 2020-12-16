export const productInputConfig = [
    {
        label: "Название товара",
        placeholder: "Картошка",
        required: 'Введите название товара',
    },
    {
        label: "Категория товара",
        placeholder: "Выберите категорию товара",
        type: 'selector',
        selectorProperty: 'category',
        required: 'Выберите категорию товара',
        nullable: true,
    },
    {
        label: "Поставщик товара",
        placeholder: "Выберите поставщика товара",
        type: 'selector',
        selectorProperty: 'provider',
        nullable: true,
        required: 'Выберите поставщика товара',

    },

    {
        label: "Описание товара",
        placeholder: "Самый вкусный картофель",
        type: 'textarea'
    },
    {
        label: "Цена товара",
        placeholder: "30 сом/кг",
        dataType: 'number',
        required: 'Укажите цену товара',
    },
    {
        label: "Количество товара",
        placeholder: "100500",
        dataType: 'number',
        required: 'Укажите количество товара',
    },
    {
        label: "Фото товара",
        type: 'image'
    },

    ]
