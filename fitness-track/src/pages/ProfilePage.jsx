import Page from "../components/Page";

function ProfilePage() {
    return (
        <Page>
            <h1>Profile page</h1>
            <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
                <label>Name:</label>
                <input type="text" /><br/>
                <label>Email:</label> 
                <input type="email" /><br/>
                <label>Age:</label>  
                <input type="number" /><br/>
                <label>Weight:</label>
                <input type="number" /><br/>
                <label>Height:</label>
                <input type="number" /><br/>   
                <button type="submit">Save</button>
            </form>
        </Page>
    );
}

export default ProfilePage;