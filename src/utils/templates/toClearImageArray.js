export const toClearImageArray = data =>  data.map(item=>item?.file ? item.file: item)