import Freelancer from '../Freelancer/Freelancer';

const FreelancerDisplay = ({ freelancers }) => {
    const freelancerList = freelancers.map((freelancer) => {

        return(
            <li id = "free-list">
                <Freelancer freelancer={freelancer} 
                    key ={freelancer.id}/>
            </li>
        )
    });

    return(
        <div>
            <h2>These are the Jobs on offer</h2>
            <ul id = "free-display">
                {freelancerList}
            </ul>
        </div>
    )
};

export default FreelancerDisplay;