import * as React from 'react'
import {strict as assert} from 'assert'
import {observer} from 'mobx-react'
import {observable, action, configure, computed} from 'mobx'
import {withStyles, WithStyles} from '@material-ui/core/styles'
import { createStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import  * as path from 'path'

configure({enforceActions: "observed"})

const AppStyles = (theme: Theme) => createStyles({
})

class AppStore {
}

interface AppProps extends WithStyles<typeof AppStyles> {
}

const appStore = new AppStore()

const App = withStyles(AppStyles)(observer(
    class extends React.Component <AppProps> {
        constructor (props: AppProps) {
            super(props)
            this.bindAllFunctions = this.bindAllFunctions.bind(this)
            this.bindAllFunctions()
        }

        bindAllFunctions() {
            this.buttonClicked = this.buttonClicked.bind(this)
        }

        buttonClicked () {
        }

        render() {
            return ( 
                <div>
                    <p> Hello World </p> 
                    <Button color="primary" variant="contained" onClick={this.buttonClicked}> Click ME </Button>
                </div>
            )
        }
    }
))

export {App}
