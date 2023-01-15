
/** Formatter data of BoxRadar functional component
  * @param  {function} formatterDataPerformance
  * @param  {object} data
  * @return {formatData => object} data with value of props king formatter 
  */ 
export function formatterDataPerformance(data){
    const InverseDataKing = data.sort((a, b) => (b.king > a.king ? 1 : -1))
    const formatData = InverseDataKing.map((data) => { 
        switch (data.kind) {
            case 1:
                return { ...data, kind: 'Cardio' };
            case 2:
                return { ...data, kind: 'Energie' };
            case 3:
                return { ...data, kind: 'Endurance' };
            case 4:
                return { ...data, kind: 'Force' };
            case 5:
                return { ...data, kind: 'Vitesse' };
            case 6:
                return { ...data, kind: 'Intensité' };
            default:
                return {...data };
        }
    });
    return formatData;
}

/** Formatter data of BoxScore functional component
  * @typedef  {function} formatterDataScore
  * @param  {object} dataUser
  * @return {(data => object, labelPourcent => number)} 
  */  
export function formatterDataScore(dataUser){
    const score =  dataUser.todayScore ? dataUser.todayScore : dataUser.score;
    const labelPourcent = score * 100;
    const data = [
      {
        fill: "transparent",
        todayScore: 1,
      },
      {
        fill: "red",
        todayScore: `${score}`,
        name:`${labelPourcent}% de vos objectif`
      },
    ]
    return {data,labelPourcent} ;
}
          
/** Formatter data of AverageSessions functional component
  * @param  {function} formatterDataAverageSessions
  * @param  {object} data
  * @return {formatData => object} data with props day formatter
  */    
export function formatterDataAverageSessions(data){

    const formatData = data.map((data) => { 
        switch (data.day) {
        case '1':
            return { ...data, day: 'L' } ;

        case '2':
            return  { ...data, day: 'M' };

        case '3':
            return  { ...data, day: 'M' };

        case '4':
            return { ...data, day: 'J' };
        
        case '5':
            return  { ...data, day: 'V' };

        case '6':
            return { ...data, day: 'S' };
        
        case '7':
            return { ...data, day: 'D' };
        
        default:
            return {...data};
        }
  })
  return formatData;
}

/** Formatter data of DailyActivity functional component
  * @typedef {function} formatterDataActivity
  * @param  {object} data
  * @return {data => object} data with value day formatter
  */
export function formatterDataActivity(data) {
    for (let i = 0 ; i < data.length ; i ++) {
        data[i].day = i + 1;
      }
      return data;
}

/** Formatter data of KeyfigureCard functional component
  * @typedef  {function} formatterKilo
  * @param  {number} value
  * @return {str => string} with new formatter (with ',' for kilo)
  */
export function formatterKilo(value){
    // let data = new Intl.NumberFormat("en-IN", {style: "decimal", maximumFractionDigits: 0}.format(value));
        var str = value.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");    
}