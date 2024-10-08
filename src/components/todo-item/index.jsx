import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";



export default function TodoItem({todo, fetchDetailsOfCurrentTodo}){
    return( 
    <Card sx={{
        maxWidth : 350,
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between',
    }}>
        <CardContent>
            <Typography variant="h5" color={"textSecondary"}>{todo?.todo}</Typography>
        </CardContent>
        <CardActions>
            <Button 
            onClick={()=>fetchDetailsOfCurrentTodo(todo?.id)}
            sx={{
                backgroundColor : 'black',
                color : 'white',
                opacity : '0.75',
                '&:hover' : {
                    opacity : '1',
                },
            }}>Details</Button>
        </CardActions>
    </Card>
    );
}