
import ActivityItem from './ActivityItem';

export default function Content()
{
  return (
    <div className="content">
        <div className="line"></div>
        <div className="item">
            <ActivityItem altText='Francisca' nombreImagen='francisca'
             time='Hace una hora' descripcion='Fui a comer con amigos' />
        </div>
        <div className="item">
            <ActivityItem altText='Paco' nombreImagen='paco'
             time='10:00 am' descripcion='Leí un artículo sobre tecnología' />
        </div>
        <div className="item">
            <ActivityItem altText='Quica' nombreImagen='quica'
             time='10:00 am' descripcion='Escribí notas sobre un proyecto importante' />
        </div>
        <div className="item">
            <ActivityItem altText='Curro' nombreImagen='curro'
             time='2:21 pm' descripcion='Preparé la presentación para la reunión de mañana' />
        </div>
    </div>
    );
}
