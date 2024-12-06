
interface ActivityItemProps {
    altText: string;
    nombreImagen: string;
    time: string;
    descripcion: string;
  }

  export default function ActivityItem ({altText,
    nombreImagen,
    time,
    descripcion}:ActivityItemProps):JSX.Element{
      return (
        <div className="item">
          <div className="avatar">
            <img
              alt={altText}
              src={`/images/${nombreImagen}.jpg`}
            />
          </div>
          <span className="time">{time}</span>
          <p>{descripcion}</p>
        </div>
      );
    };