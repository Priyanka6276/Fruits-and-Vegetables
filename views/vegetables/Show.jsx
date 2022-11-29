const React = require("react");
const DefaultLayout = require("../layout/Default")

class Show extends React.Component{
    render() { 
        const vegetable = this.props.vegetable 
        console.log(this.props.vegetable)
        return (
          <DefaultLayout title={`${vegetable.name} Show Page`}>
            <div>
                <p>
                    The {vegetable.name} is {vegetable.color}.
                    {vegetable.readyToEat ? " It is ready to eat!" : " It is not ready to eat... don't touch that"}
                </p>
            </div>
          </DefaultLayout>
        )
    }
}

module.exports = Show

//js code in the {}

/**
 * If an error shows because of strict mode :
 * const React = require("react");

class Show extends React.Component {
  render() {
    const {name, color, readyToEat} = this.props // <========================= deconstruct it
    return (
      <div>
        <h1>Show Page</h1>

        <div>
          <p>The {name} is {color}.</p>
          {readyToEat? "It is ready to eat!" : "It is not ready to eat... dont touch that"}
        </div> 
      </div>
    )
  }
}
// We can write javascript code within the curly brackets

module.exports = Show
 */