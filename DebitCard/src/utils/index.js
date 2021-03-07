export const formatAmount = (amount) => {
    if (!amount || typeof (amount) !== 'number') return '';
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace('.00', '');
};