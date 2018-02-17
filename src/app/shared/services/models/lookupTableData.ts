declare var Object: any;
export interface LookupTableDataInterface {
  lookupTableName: string;
    lookupTableDisplayName: string;
    fields:
    [
      {
      	fieldName:string;
      	fieldDisplayName:string;
      }
    ];
}
export class LookupTableData implements LookupTableDataInterface {
	lookupTableName: string;
    lookupTableDisplayName: string;
    fields:
    [
      {
      	fieldName:string;
      	fieldDisplayName:string;
      }
    ] 

    constructor(data?: LookupTableDataInterface) {
    Object.assign(this, data);
  } 
}
