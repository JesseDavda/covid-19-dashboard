export const NumberMask = num =>
           num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');