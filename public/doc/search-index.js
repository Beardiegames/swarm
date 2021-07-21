var searchIndex = JSON.parse('{\
"swarm":{"doc":"An object pooling system optimized for perfomance.","t":[0,3,12,12,11,11,11,11,11,11,11,11,0,6,6,6,6,6,3,11,11,11,11,3,0,0,4,13,13,13,13,11,11,0,3,3,3,3,3,3,3,8,10,10,10,10,10,10,10,10,5,5,5,5,5,5,5,5,5,5,5,5,5,3,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["control","SwarmControl","pool","properties","target","target_spawn","head","fetch","spawn_at","kill_current","spawn","kill","types","ObjectPosition","SpawnId","ForEachHandler","ForAllHandler","UpdateHandler","Spawn","id","pos","active","mirror","Tag","tools","byte_str","ByteStr","Str8","Str16","Str32","Str64","len","char","sized_pool","SizedPool16","SizedPool32","SizedPool64","SizedPool128","SizedPool256","SizedPool512","SizedPool1024","StackPool","count","count_mut","ref_at","ref_sorted","item_at","item_last","item_sorted","order_at","for_each","position","find","for_while","push","pop","shift","count","remove_at","remove_equal","get_item","get_ref","swap","Swarm","properties","new","spawn","kill","find_spawn","fetch","fetch_ref","fetch_raw","count","capacity","for_each","for_all","update","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","count","count_mut","ref_at","ref_sorted","item_at","item_last","item_sorted","order_at","count","count_mut","ref_at","ref_sorted","item_at","item_last","item_sorted","order_at","count","count_mut","ref_at","ref_sorted","item_at","item_last","item_sorted","order_at","count","count_mut","ref_at","ref_sorted","item_at","item_last","item_sorted","order_at","count","count_mut","ref_at","ref_sorted","item_at","item_last","item_sorted","order_at","count","count_mut","ref_at","ref_sorted","item_at","item_last","item_sorted","order_at","count","count_mut","ref_at","ref_sorted","item_at","item_last","item_sorted","order_at","from","from","into","clone","default","default","eq","eq","ne","eq","eq","eq","fmt","fmt","fmt","new","new","new","new","new","new","new"],"q":["swarm","swarm::control","","","","","","","","","","","swarm","swarm::types","","","","","","","","","","","swarm","swarm::tools","swarm::tools::byte_str","","","","","","","swarm::tools","swarm::tools::sized_pool","","","","","","","","","","","","","","","","","","","","","","","","","","","","","swarm","","","","","","","","","","","","","","swarm::control","","","","","","","swarm::types","","","","","","","","","","","","","","swarm::tools::byte_str","","","","","","","","","swarm::tools::sized_pool","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","swarm","","","","","","","swarm::tools::sized_pool","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","swarm::tools::byte_str","","","","swarm::types","swarm::tools::byte_str","swarm::types","","","swarm::tools::byte_str","","","swarm::types","","swarm::tools::byte_str","swarm::tools::sized_pool","","","","","",""],"d":["Controling a swarm during the swarm.update() loop","","","","","","","","","","","","Types used by the Swarm pool.","A pointer to a swarm data object","The identity of a Spawn","A callback handler used by the for_each() methode on …","A callback handler used by the for_all() methode on Swarm.…","A callback handler used by the update() methode on Swarm. …","A spawn is a pointer that points to a data object in the …","Returns the identity of this Spawns. All RC clones of …","Returns the position of the target object in the pool","Returns true if this object is active and will be updated …","Returns a ‘Reference Counted’ clone of this Spawn","Tags hold Spawn data, and since A spawn is a Refence …","Tools contains a set of Sized types that can be useful …","Sized byte string with predefined sizes of 8, 16, 32 or …","Sized byte string with predefined sizes of 8, 16, 32 or …","","","","","returns the bytesize of the current ByteStr","Returns the character at a specific index as a u8 byte","A set of Sized pools that can be use kindof like a …","Sized pool object with a max capacity of 16 items.","Sized pool object with a max capacity of 32 items.","Sized pool object with a max capacity of 64 items.","Sized pool object with a max capacity of 128 items.","Sized pool object with a max capacity of 256 items.","Sized pool object with a max capacity of 512 items.","Sized pool object with a max capacity of 1024 items.","The StackPool trait is used by this module to communicate …","","","","","","","","","Loop through all pushed items and edit them using a …","Find the position of an item within the pool. Returns …","Find the position of an item within the pool. Returns …","Loop through all items and keep looping until the …","Add a new item to the pool.","Removes the last item from the pool and returns that item.","Removes the first item from the pool and returns that …","Returns the number of items in the pool.","Remove an item at position.  Returns the removed item or …","Remove an item that equals another item.  Returns the …","Returns a mutable reference of an item from the pool at …","Returns a immutable reference of an item from the pool at …","Swap the positions of two items in the pool.","The actual Swarm pool","","Create a new Swarm object pool","Create a new pool instance.  Spawns are included in the …","Remove a spawn from the swarm pool","Returns a spawn reference object from an object position …","Returns a mutable reference to an object from the Swarm …","Returns a immutable reference to an object from the Swarm …","Returns a mutable reference to an object from the Swarm …","Returns the number of spawned instances currently …","Returns the maximum number of instances that can be …","Loops through all spawned instances and returns them via …","Loops through all spawned instances and returns their …","Loops through all spawned instances and returns a …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Creates a new pool.","","Creates a new pool.","Creates a new pool.","Creates a new pool.","Creates a new pool.","Creates a new pool."],"i":[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,1,1,1,1,1,1,1,2,2,2,2,2,2,2,6,6,6,6,6,6,6,3,3,3,3,3,3,3,3,3,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,9,10,10,10,10,10,10,10,11,11,11,11,11,11,11,12,12,12,12,12,12,12,13,13,13,13,13,13,13,5,5,5,5,5,5,5,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,3,3,3,3,6,3,2,6,6,3,3,3,2,6,3,7,8,9,10,11,12,13],"f":[null,null,null,null,[[]],[[],["spawn",3]],[[],["objectposition",6]],[[["objectposition",6]]],[[["objectposition",6]],["spawn",3]],[[]],[[],[["option",4],["spawn",3]]],[[["spawn",3]]],null,null,null,null,null,null,null,[[],["spawnid",6]],[[],["objectposition",6]],[[],["bool",15]],[[]],null,null,null,null,null,null,null,null,[[],["usize",15]],[[["usize",15]],["u8",15]],null,null,null,null,null,null,null,null,null,[[],["usize",15]],[[],["usize",15]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["usize",15]],[[]],[[],[["usize",15],["option",4]]],[[],[["usize",15],["option",4]]],[[],[["usize",15],["option",4]]],[[]],[[],["option",4]],[[],["option",4]],[[],["usize",15]],[[["usize",15]],["option",4]],[[],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]]],null,null,[[["usize",15]]],[[],[["option",4],["spawn",3]]],[[["spawn",3]]],[[["objectposition",6]],["spawn",3]],[[["spawn",3]]],[[["spawn",3]]],[[["objectposition",6]]],[[],["usize",15]],[[],["usize",15]],[[["foreachhandler",6]]],[[["forallhandler",6]]],[[["updatehandler",6]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["usize",15]],[[],["usize",15]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["usize",15]],[[["str",15]],["bytestr",4]],[[["string",3]],["bytestr",4]],[[],["string",3]],[[],["bytestr",4]],[[],["tag",3]],[[]],[[["spawn",3]],["bool",15]],[[["tag",3]],["bool",15]],[[["tag",3]],["bool",15]],[[["bytestr",4]],["bool",15]],[[["str",15]],["bool",15]],[[["string",3]],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]]],"p":[[3,"SwarmControl"],[3,"Spawn"],[4,"ByteStr"],[8,"StackPool"],[3,"Swarm"],[3,"Tag"],[3,"SizedPool16"],[3,"SizedPool32"],[3,"SizedPool64"],[3,"SizedPool128"],[3,"SizedPool256"],[3,"SizedPool512"],[3,"SizedPool1024"]]}\
}');
initSearch(searchIndex);