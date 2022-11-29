const React = require("react")
const DefaultLayout = require("../layout/Default")


class Index extends React.Component {
    render() {
        const {vegetables} = this.props
        return(
            <DefaultLayout title="Vegetables Index Page">
                <nav><a href="/vegetables/new"> Create Vegetable </a></nav>
                <ul>
                {
                    vegetables.map((vegetable,j) => {
                        return(
                            <li key = {j}> 
                                The {" "}
                                <a style = {{color: "red"}} href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a>
                                {" "}
                                is {vegetable.color} <br />
                                {
                                    vegetable.readyToEat 
                                    ? "It is ready to eat"
                                    : "It is not ready to eat"
                                }
                                <br />
                                <a href={`/vegetables/${vegetable._id}/edit`}>Edit This Vegetable</a>
                                <form action={`/vegetables/${vegetable._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE" />
                                </form>
                            </li>
                        )
                    })
                }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index