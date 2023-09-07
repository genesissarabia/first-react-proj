function ProfileCard({title, handle, image}) {
    // const title = props.title;
    // const handle = props.handle;
    // const {title, handle} = props;
    // ****took out props altogether from parameter and since were only
    // focusing on title and handle props we can just stick it as an object
    // directly in parameter for function****
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
            </div>
        </div>


    );
}

export default ProfileCard;