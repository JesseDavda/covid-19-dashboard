const colourLevels = {
    '0': '#B3B9D3',
    '0.1': '#9BA3C4',
    '0.2': '#838EB5',
    '0.3': '#6C79A5',
    '0.4': '#556495',
    '0.5': '#3E5085',
    '0.6': '#273C75',
    '0.7': '#23336D',
    '0.8': '#1F2A65',
    '0.9': '#1B225C',
    '1': '#171A53',
};

export const getColour = num => colourLevels[String (Math.round(num * 10) / 10)];