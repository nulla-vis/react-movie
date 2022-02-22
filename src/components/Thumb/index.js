import { Link } from 'react-router-dom';
// Styles
import { Image } from './Thumb.styles';


const Thumb = ( { image, moviedId, clickable } ) => (
    <div>
        {clickable ? (
            <Link to={`/${moviedId}`}>
                <Image src={ image } alt="movie-thumb" />
            </Link>
        ) : (
            <Image src={ image } alt="movie-thumb" />
        )}
    </div>
);

export default Thumb;