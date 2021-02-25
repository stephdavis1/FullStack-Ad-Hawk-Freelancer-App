const Freelancer = ({freelancer}) => {

    return (

        <div>
            <h3>{freelancer.name}</h3>
            <p>Email: {freelancer.email}</p>
            <p>User Name: {freelancer.userName}</p>
        </div>
    )
};

export default Freelancer;