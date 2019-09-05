export class Reporte{
    constructor(
        public Opcion: String,
        public id_location: Number,
        public lat: Number,
        public lng: Number,
        public position: Number,
        public time_reported: String,
        public type: String,
        public Stops_Usuarios: String,
        public pasajeros :String
    ){}
}