 package services;
import EntityManagers.ConcreteDAO;
import domainModel.Challenge;
import domainModel.Level;
import domainModel.Users;
import java.util.*;

import javax.ws.rs.*;
import javax.ws.rs.core.*;


 
 
@Path("getLevels")
public class GetLevels {
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public  Response getLevels()
            
    {
        ConcreteDAO manager = new ConcreteDAO();
        List<Level> allLevels = manager.getAllLevels();
     
        
        return Response.ok().entity(new GenericEntity<List<Level>>(allLevels){})
        .header("Access-Control-Allow-Origin", "*")
        .header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD")
        .build();
        
    }
                
} 