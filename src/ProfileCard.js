
function ProfileCard({title, handle, image}){
    // const title = props.title;
    // const handle = props.handle;
    // const {title, handle} = props;
    // ****took out props altogether from parameter and since were only
    // focusing on title and handle props we can just stick it as an object
    // directly in parameter for function****
    return (
    <div>
        <img src={image} alt="pda logo"/>
        <div>Title is {title}</div>
        <div>Handle is {handle}</div>
    </div>
    );
}

export default ProfileCard;