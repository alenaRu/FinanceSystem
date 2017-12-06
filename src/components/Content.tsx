import * as React from 'react';
import Card from 'material-ui/Card';
import StudentTable from './StudentTable';
import Grid from 'material-ui/Grid';
import withStyles from 'material-ui/styles/withStyles';
import SearchInput from './SearchInput';
import Typography from 'material-ui/Typography';
import StudentInfo from './StudentInfo';
import Input from 'material-ui/Input';
import {
  Select, MenuItem, default as FormHelperText,
  default as InputLabel, default as FormControl
} from 'material-ui';

const styles = theme => ({
  root : {
    flexGrow : 1,
    marginTop: -150
  },
  paper: {
    padding  : 16,
    textAlign: 'center',
    color    : theme.palette.text.secondary
  }
});

enum ContentType { List, Student}

class Content extends React.Component<any, any> {
  constructor(props) {
    super(props);
    
    this.state = {
      page  : ContentType.List,
      search: {value: '', column: ''}
    };
  }
  
  openStudent = (student: any) => {
    this.setState(
      {
        page           : ContentType.Student,
        selectedStudent: student
      });
  };
  
  openList = () => {
    this.setState({page: ContentType.List});
  };
  
  onSearchInput = (value, column) => {
    this.setState({search: {value, column}});
  };
  
  render() {
    const {classes}               = this.props;
    const {page, selectedStudent, search} = this.state;
    
    return (
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={2}/>
        <Grid item xs={8}>
          <SearchInput onSearch={this.onSearchInput}/>
        </Grid>
        <Grid item xs={2}/>
        
        <Grid item xs={1}/>
        <Grid item xs={10}>
          <Card className={classes.paper}>
            {(page === ContentType.List) ? (
              <div>
                <Typography type="display2">
                  Student List
                </Typography>
                <StudentTable onStudentClick={this.openStudent} filter={search}/>
              </div>
            ) : (
              <div>
                <Typography type="display2">
                  Student Information
                </Typography>
                <StudentInfo data={selectedStudent} onBack={this.openList}/>
              </div>
            )
            }
          </Card>
        </Grid>
        <Grid item xs={1}/>
      </Grid>
    );
  }
}

export default withStyles(styles)(Content);
