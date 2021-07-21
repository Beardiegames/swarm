initSidebarItems({"struct":[["Spawn","A spawn is a pointer that points to a data object in the swarm pool. Spawns are ‘Reference Counted’ which makes it possible to hand them out  like free candy during halloween, no (compiler) questions asked ;)"],["Tag","Tags hold Spawn data, and since A spawn is a Refence Counted Tag, that makes a Tag kind of an abstract Spawn"]],"type":[["ForAllHandler","A callback handler used by the for_all() methode on Swarm. Returns the object position, a mutable pool reference and the swarm properties the for_all() loop is currently iterating over."],["ForEachHandler","A callback handler used by the for_each() methode on Swarm. Return a mutable reference of a data object in the pool that  the for_each() loop is currently iterating over."],["ObjectPosition","A pointer to a swarm data object"],["SpawnId","The identity of a Spawn"],["UpdateHandler","A callback handler used by the update() methode on Swarm. Return a SwarmControl object that refers to the object the update() loop  is currently iterating over."]]});