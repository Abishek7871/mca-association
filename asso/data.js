const quizData = {
    java: [
        {
            question: "Which of the following is NOT a fundamental feature of OOP in Java?",
            options: ["Inheritance", "Encapsulation", "Compilation", "Polymorphism"],
            correct: 2
        },
        {
            question: "What is the size of an 'int' variable in Java?",
            options: ["16 bits", "32 bits", "64 bits", "Depends on OS"],
            correct: 1
        },
        {
            question: "Which keyword is used to prevent a class from being inherited?",
            options: ["static", "final", "abstract", "private"],
            correct: 1
        },
        {
            question: "What is the parent class of all classes in Java?",
            options: ["Main", "System", "Object", "Base"],
            correct: 2
        },
        {
            question: "Which method is used to start a thread in Java?",
            options: ["run()", "execute()", "init()", "start()"],
            correct: 3
        },
        {
            question: "What is the primary advantage of Virtual Threads introduced in Java 21?",
            options: ["Faster execution for CPU-bound tasks", "True parallel execution on single core", "Reduced memory footprint for blocking I/O", "Replacement for java.util.concurrent"],
            correct: 2
        },
        {
            question: "In JVM, what is the most effective way to identify if 'Premature Promotion' is causing long GC pauses?",
            options: ["Increase Max Heap Size", "Analyze GC logs for Old Gen occupancy changes", "Switch to Parallel GC", "Decrease NewRatio"],
            correct: 1
        },
        {
            question: "What is the fundamental difference between map() and flatMap() in Java Streams?",
            options: ["map is for filtering, flatMap is for transformation", "map produces 1:1 mapping, flatMap produces 1:N and flattens", "flatMap is only for parallel streams", "map cannot change the element type"],
            correct: 1
        },
        {
            question: "Which mechanism allows an application to load classes at runtime, enabling plugin architectures?",
            options: ["Static Loading", "Dynamic Class Loading", "Compile-time Binding", "Native Linker"],
            correct: 1
        },
        {
            question: "Why is using 'Serializable' for remote communication considered a security risk?",
            options: ["It is slower than JSON", "It is deprecated in Java 17", "Vulnerable to deserialization attacks/RCE", "Does not support complex objects"],
            correct: 2
        },
        {
            question: "In the Java Memory Model, what does the 'happens-before' relationship guarantee?",
            options: ["Total order of all instructions", "Visibility of memory writes across threads", "Code will always run faster", "Variables are stored in CPU cache"],
            correct: 1
        },
        {
            question: "What happens during 'Type Erasure' in Java Generics?",
            options: ["Generic types are converted to Object or bounds at compile time", "Type information is added to the bytecode", "All generic classes are deleted", "The compiler generates separate classes for each type"],
            correct: 0
        },
        {
            question: "Which of these is a major drawback of using the Reflection API extensively?",
            options: ["It makes code more readable", "It bypasses JVM optimizations and is slow", "It prevents garbage collection", "It only works with private methods"],
            correct: 1
        },
        {
            question: "What is the difference between join() and get() methods in CompletableFuture?",
            options: ["join() is async, get() is sync", "join() throws unchecked exceptions, get() throws checked", "get() is faster than join()", "There is no difference"],
            correct: 1
        },
        {
            question: "How does the G1 Garbage Collector manage the heap?",
            options: ["Single continuous block", "Two large semi-spaces", "Divided into many fixed-size regions", "No heap management"],
            correct: 2
        }
    ],
    dbms: [
        {
            question: "Which Normal Form deals with 'Transitive Dependency'?",
            options: ["1NF", "2NF", "3NF", "BCNF"],
            correct: 2
        },
        {
            question: "What does ACID stand for in DBMS?",
            options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Isolation, Data", "Atomicity, Complexity, Isolation, Durability", "Access, Control, Integrity, Data"],
            correct: 0
        },
        {
            question: "Which SQL command is used to remove all records from a table without deleting the table structure?",
            options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
            correct: 2
        },
        {
            question: "A primary key must be...",
            options: ["Unique", "Not Null", "Both Unique and Not Null", "Unique but can be Null"],
            correct: 2
        },
        {
            question: "Which join returns all records when there is a match in either left or right table?",
            options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
            correct: 3
        },
        {
            question: "How is Conflict Serializability verified in a schedule?",
            options: ["By checking for deadlocks", "By ensuring no cycle exists in the Precedence Graph", "By counting total transactions", "By checking the number of Read operations"],
            correct: 1
        },
        {
            question: "Why is a B+ Tree preferred over a B Tree for database indexing?",
            options: ["B+ Tree has fewer levels", "All data is stored in leaf nodes, allowing faster range queries", "B+ Tree uses less memory", "B Tree does not support indexing"],
            correct: 1
        },
        {
            question: "Which Normal Form is specifically designed to handle 'Multivalued Dependencies'?",
            options: ["3NF", "BCNF", "4NF", "5NF"],
            correct: 2
        },
        {
            question: "In Log-Based Recovery, which transactions must be REDONE during system restart?",
            options: ["All transactions in the log", "Transactions with both START and COMMIT records", "Transactions with only START records", "Transactions active at the time of crash"],
            correct: 1
        },
        {
            question: "What is the difference between Dense and Sparse indexing?",
            options: ["Dense has entries for every search key value, Sparse has entries for data blocks", "Sparse is faster than Dense", "Dense uses less space", "Sparse is only for primary keys"],
            correct: 0
        },
        {
            question: "Which heuristic is commonly used by Query Optimizers to improve relational algebra performance?",
            options: ["Perform Join before Selection", "Perform Selection as early as possible", "Perform Projection at the very end", "Always use nested loops"],
            correct: 1
        },
        {
            question: "What is the 'Rigorous Two-Phase Locking' protocol?",
            options: ["A protocol that allows locks to be released anytime", "A protocol where all locks are held until transaction commits/aborts", "A protocol used only for read-only databases", "A protocol that prevents all concurrency"],
            correct: 1
        },
        {
            question: "Which concurrency phenomenon occurs when a transaction reads a set of rows and then sees a 'new' row when re-reading?",
            options: ["Dirty Read", "Non-repeatable Read", "Phantom Read", "Lost Update"],
            correct: 2
        },
        {
            question: "Which of the following statements is TRUE about Conflict and View Serializability?",
            options: ["View Serializability implies Conflict Serializability", "Conflict Serializability implies View Serializability", "They are identical", "Neither implies the other"],
            correct: 1
        },
        {
            question: "In Relational Algebra, what is the 'Division' operator used for?",
            options: ["Mathematical division of numeric values", "Finding entities that are related to ALL members of another set", "Splitting a table into two", "Deleting records"],
            correct: 1
        }
    ],
    os: [
        {
            question: "What is a 'Deadlock'?",
            options: ["A process is finished", "Two or more processes are waiting for each other to release resources", "A process is running too fast", "Operating system crash"],
            correct: 1
        },
        {
            question: "Which scheduling algorithm is non-preemptive?",
            options: ["Round Robin", "First Come First Served (FCFS)", "Priority Scheduling", "Shortest Remaining Time First"],
            correct: 1
        },
        {
            question: "Virtual memory is typically implemented by...",
            options: ["Paging", "Segmentation", "Caching", "All of the above"],
            correct: 0
        },
        {
            question: "The part of the OS that resides in main memory is called...",
            options: ["Shell", "Kernel", "Compiler", "Driver"],
            correct: 1
        },
        {
            question: "Which of these is NOT a state of a process?",
            options: ["Running", "Ready", "Waiting", "Execution"],
            correct: 3
        },
        {
            question: "What is Belady's Anomaly in page replacement algorithms?",
            options: ["Page fault rate decreases with more frames", "Page fault rate increases with more frames", "CPU usage drops to zero", "System enters a deadlock"],
            correct: 1
        },
        {
            question: "What is the penalty for a Translation Lookaside Buffer (TLB) miss?",
            options: ["Process termination", "Accessing the page table in main memory", "Disk swap operation", "Kernel panic"],
            correct: 1
        },
        {
            question: "In the Reader-Writer problem, what happens if priority is given to Readers?",
            options: ["Readers will wait forever", "Writers may suffer from starvation", "Deadlock occurs", "Throughput decreases"],
            correct: 1
        },
        {
            question: "What is the function of 'Inodes' in a UNIX file system?",
            options: ["Store user passwords", "Store metadata about a file and pointers to its data blocks", "Handle network requests", "Compress large files"],
            correct: 1
        },
        {
            question: "What is the primary cause of 'Thrashing' in an Operating System?",
            options: ["Too many CPU cores", "Sum of working sets of processes exceeds total available memory", "Slow disk access", "Multiple deadlocks"],
            correct: 1
        },
        {
            question: "The Banker's Algorithm is used to determine if the system is in a...",
            options: ["Wait State", "Dead State", "Safe State", "Critical State"],
            correct: 2
        },
        {
            question: "Which of the following is a classic software-based solution to the Critical Section problem for two processes?",
            options: ["Banker's Algorithm", "Peterson's Solution", "Dining Philosophers", "Round Robin"],
            correct: 1
        },
        {
            question: "What is the main difference between Kernel-level threads and User-level threads?",
            options: ["User threads are faster to switch", "Kernel is aware of individual kernel-level threads", "Kernel threads do not need a CPU", "User threads can access hardware directly"],
            correct: 1
        },
        {
            question: "How is the Effective Access Time calculated in demand paging?",
            options: ["(Hit Rate * Memory Access) + (Miss Rate * Page Fault Service Time)", "Memory Access / Disk Access", "Total Execution Time / Page Faults", "Constant 10ms"],
            correct: 0
        },
        {
            question: "Which RAID level uses block-level striping with distributed parity?",
            options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
            correct: 2
        }
    ],
    networking: [
        {
            question: "How many layers are there in the OSI model?",
            options: ["4", "5", "6", "7"],
            correct: 3
        },
        {
            question: "Which protocol is used to map an IP address to a MAC address?",
            options: ["DNS", "DHCP", "ARP", "HTTP"],
            correct: 2
        },
        {
            question: "What is the port number for HTTPS?",
            options: ["80", "443", "21", "25"],
            correct: 1
        },
        {
            question: "Which layer of the OSI model is responsible for routing?",
            options: ["Physical", "Data Link", "Network", "Transport"],
            correct: 2
        },
        {
            question: "IPv6 addresses have a size of...",
            options: ["32 bits", "64 bits", "128 bits", "256 bits"],
            correct: 2
        },
        {
            question: "In a network with a /27 subnet mask, how many usable host addresses are available per subnet?",
            options: ["32", "30", "16", "14"],
            correct: 1
        },
        {
            question: "In TCP Congestion Control, what happens when the 'Congestion Window' reaches the 'Slow Start Threshold'?",
            options: ["Connection terminates", "It switches from Slow Start to Congestion Avoidance", "Window size is reset to 1", "Data transfer stops"],
            correct: 1
        },
        {
            question: "The Border Gateway Protocol (BGP) is classified as which type of routing protocol?",
            options: ["Distance Vector", "Link State", "Path Vector", "Static Routing"],
            correct: 2
        },
        {
            question: "How does ARP Spoofing work?",
            options: ["Guessing the IP address", "Sending fake/gratuitous ARP messages to link a MAC address with another IP", "Shutting down the router", "Cracking the WiFi password"],
            correct: 1
        },
        {
            question: "What is the role of Root Name Servers in the DNS hierarchy?",
            options: ["They store all IP addresses", "They are the first step in resolving a domain name by pointing to TLD servers", "They host the actual websites", "They manage local ISP caches"],
            correct: 1
        },
        {
            question: "What is the fundamental difference between CSMA/CD and CSMA/CA?",
            options: ["CD detects collisions (Ethernet), CA tries to avoid them (WiFi)", "CA is for wired, CD is for wireless", "CD is faster than CA", "They are the same"],
            correct: 0
        },
        {
            question: "The 'Fragment Offset' field in an IP header is measured in units of...",
            options: ["1 byte", "4 bytes", "8 bytes", "16 bytes"],
            correct: 2
        },
        {
            question: "During an SSL/TLS handshake, what is the purpose of the Certificate validation?",
            options: ["To encrypt the data", "To verify the identity of the server using a trust chain to a CA", "To check the user's password", "To speed up the connection"],
            correct: 1
        },
        {
            question: "In Distance Vector routing, what is the 'Count to Infinity' problem?",
            options: ["Network becomes too large", "Slow convergence leads to routing loops with increasing metrics", "The CPU enters an infinite loop", "Bandwidth becomes zero"],
            correct: 1
        },
        {
            question: "What is the primary purpose of the ICMP protocol?",
            options: ["Transferring files", "Error reporting and network diagnostics (e.g. Ping)", "Sending emails", "Assigning IP addresses"],
            correct: 1
        }
    ]
};
