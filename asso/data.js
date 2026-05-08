const quizData = {
    java: [
        {
            question: "Which of the following is NOT a fundamental feature of OOP in Java?",
            options: ["Inheritance", "Encapsulation", "Compilation", "Polymorphism"],
            correct: 2,
            reason: "Compilation is a process of converting source code to bytecode, not a core OOP principle like Inheritance, Encapsulation, and Polymorphism."
        },
        {
            question: "What is the size of an 'int' variable in Java?",
            options: ["16 bits", "32 bits", "64 bits", "Depends on OS"],
            correct: 1,
            reason: "In Java, the size of 'int' is always 32 bits, regardless of the underlying platform/OS, ensuring portability."
        },
        {
            question: "Which keyword is used to prevent a class from being inherited?",
            options: ["static", "final", "abstract", "private"],
            correct: 1,
            reason: "The 'final' keyword, when applied to a class, prevents any other class from extending it."
        },
        {
            question: "What is the parent class of all classes in Java?",
            options: ["Main", "System", "Object", "Base"],
            correct: 2,
            reason: "java.lang.Object is the ultimate root of the Java class hierarchy."
        },
        {
            question: "Which method is used to start a thread in Java?",
            options: ["run()", "execute()", "init()", "start()"],
            correct: 3,
            reason: "The start() method creates a new thread of execution and then calls the run() method. Calling run() directly does not start a new thread."
        },
        {
            question: "What is the primary advantage of Virtual Threads introduced in Java 21?",
            options: ["Faster execution for CPU-bound tasks", "True parallel execution on single core", "Reduced memory footprint for blocking I/O", "Replacement for java.util.concurrent"],
            correct: 2,
            reason: "Virtual threads are lightweight and managed by the JVM, allowing thousands of threads to perform blocking I/O without exhausting OS resources."
        },
        {
            question: "In JVM, what is the most effective way to identify if 'Premature Promotion' is causing long GC pauses?",
            options: ["Increase Max Heap Size", "Analyze GC logs for Old Gen occupancy changes", "Switch to Parallel GC", "Decrease NewRatio"],
            correct: 1,
            reason: "GC logs show the survival rate of objects in the Young Gen and how much is being promoted to the Old Gen, indicating promotion pressure."
        },
        {
            question: "What is the fundamental difference between map() and flatMap() in Java Streams?",
            options: ["map is for filtering, flatMap is for transformation", "map produces 1:1 mapping, flatMap produces 1:N and flattens", "flatMap is only for parallel streams", "map cannot change the element type"],
            correct: 1,
            reason: "map() transforms each element into another element, while flatMap() transforms each element into a stream and then flattens those streams into one."
        },
        {
            question: "Which mechanism allows an application to load classes at runtime, enabling plugin architectures?",
            options: ["Static Loading", "Dynamic Class Loading", "Compile-time Binding", "Native Linker"],
            correct: 1,
            reason: "Dynamic Class Loading (using Class.forName or ClassLoader) allows the JVM to find and load classes during execution based on runtime data."
        },
        {
            question: "Why is using 'Serializable' for remote communication considered a security risk?",
            options: ["It is slower than JSON", "It is deprecated in Java 17", "Vulnerable to deserialization attacks/RCE", "Does not support complex objects"],
            correct: 2,
            reason: "Java Deserialization can be exploited to execute arbitrary code by passing malicious bytestreams that instantiate dangerous object chains."
        },
        {
            question: "In the Java Memory Model, what does the 'happens-before' relationship guarantee?",
            options: ["Total order of all instructions", "Visibility of memory writes across threads", "Code will always run faster", "Variables are stored in CPU cache"],
            correct: 1,
            reason: "It provides a formal guarantee that memory writes by one thread are visible to another thread if a happens-before relationship exists."
        },
        {
            question: "What happens during 'Type Erasure' in Java Generics?",
            options: ["Generic types are converted to Object or bounds at compile time", "Type information is added to the bytecode", "All generic classes are deleted", "The compiler generates separate classes for each type"],
            correct: 0,
            reason: "To ensure backward compatibility, the Java compiler replaces all type parameters in generic types with their bounds or Object if the type parameters are unbounded."
        },
        {
            question: "Which of these is a major drawback of using the Reflection API extensively?",
            options: ["It makes code more readable", "It bypasses JVM optimizations and is slow", "It prevents garbage collection", "It only works with private methods"],
            correct: 1,
            reason: "Reflection involves dynamic type checking and resolution, which prevents the JIT compiler from performing various optimizations like inlining."
        },
        {
            question: "What is the difference between join() and get() methods in CompletableFuture?",
            options: ["join() is async, get() is sync", "join() throws unchecked exceptions, get() throws checked", "get() is faster than join()", "There is no difference"],
            correct: 1,
            reason: "get() is declared in the Future interface and throws ExecutionException (checked), while join() is designed for functional style and throws CompletionException (unchecked)."
        },
        {
            question: "How does the G1 Garbage Collector manage the heap?",
            options: ["Single continuous block", "Two large semi-spaces", "Divided into many fixed-size regions", "No heap management"],
            correct: 2,
            reason: "G1 (Garbage First) partitions the heap into equal-sized virtual memory regions, allowing it to collect garbage from regions with the most reclaimable space first."
        }
    ],
    dbms: [
        {
            question: "Which Normal Form deals with 'Transitive Dependency'?",
            options: ["1NF", "2NF", "3NF", "BCNF"],
            correct: 2,
            reason: "A relation is in 3NF if it is in 2NF and no non-prime attribute is transitively dependent on the primary key."
        },
        {
            question: "What does ACID stand for in DBMS?",
            options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Isolation, Data", "Atomicity, Complexity, Isolation, Durability", "Access, Control, Integrity, Data"],
            correct: 0,
            reason: "ACID properties ensure that database transactions are processed reliably."
        },
        {
            question: "Which SQL command is used to remove all records from a table without deleting the table structure?",
            options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
            correct: 2,
            reason: "TRUNCATE is a DDL command that removes all rows from a table and is usually faster than DELETE (a DML command)."
        },
        {
            question: "A primary key must be...",
            options: ["Unique", "Not Null", "Both Unique and Not Null", "Unique but can be Null"],
            correct: 2,
            reason: "By definition, a primary key must uniquely identify a row and cannot contain NULL values."
        },
        {
            question: "Which join returns all records when there is a match in either left or right table?",
            options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
            correct: 3,
            reason: "FULL OUTER JOIN returns all rows from both tables, joining them where possible and filling with NULLs where no match exists."
        },
        {
            question: "How is Conflict Serializability verified in a schedule?",
            options: ["By checking for deadlocks", "By ensuring no cycle exists in the Precedence Graph", "By counting total transactions", "By checking the number of Read operations"],
            correct: 1,
            reason: "A schedule is conflict serializable if and only if its precedence graph (serializability graph) has no cycles."
        },
        {
            question: "Why is a B+ Tree preferred over a B Tree for database indexing?",
            options: ["B+ Tree has fewer levels", "All data is stored in leaf nodes, allowing faster range queries", "B+ Tree uses less memory", "B Tree does not support indexing"],
            correct: 1,
            reason: "In a B+ Tree, leaf nodes are linked together, which significantly speeds up sequential scans and range queries compared to a standard B Tree."
        },
        {
            question: "Which Normal Form is specifically designed to handle 'Multivalued Dependencies'?",
            options: ["3NF", "BCNF", "4NF", "5NF"],
            correct: 2,
            reason: "4NF eliminates redundant data that occurs due to multivalued dependencies (MVDs) where independent attributes are related to the same entity."
        },
        {
            question: "In Log-Based Recovery, which transactions must be REDONE during system restart?",
            options: ["All transactions in the log", "Transactions with both START and COMMIT records", "Transactions with only START records", "Transactions active at the time of crash"],
            correct: 1,
            reason: "REDONE transactions are those that were successfully committed before the crash; their changes must be reapplied to ensure durability."
        },
        {
            question: "What is the difference between Dense and Sparse indexing?",
            options: ["Dense has entries for every search key value, Sparse has entries for data blocks", "Sparse is faster than Dense", "Dense uses less space", "Sparse is only for primary keys"],
            correct: 0,
            reason: "Dense index has an entry for every record, while Sparse index has entries only for the start of each block, saving space but requiring more search time."
        },
        {
            question: "Which heuristic is commonly used by Query Optimizers to improve relational algebra performance?",
            options: ["Perform Join before Selection", "Perform Selection as early as possible", "Perform Projection at the very end", "Always use nested loops"],
            correct: 1,
            reason: "Selection early reduces the number of tuples being processed in subsequent (and more expensive) operations like Joins."
        },
        {
            question: "What is the 'Rigorous Two-Phase Locking' protocol?",
            options: ["A protocol that allows locks to be released anytime", "A protocol where all locks are held until transaction commits/aborts", "A protocol used only for read-only databases", "A protocol that prevents all concurrency"],
            correct: 1,
            reason: "Rigorous 2PL ensures strict serializability and prevents cascading rollbacks by holding all locks until the transaction is finalized."
        },
        {
            question: "Which concurrency phenomenon occurs when a transaction reads a set of rows and then sees a 'new' row when re-reading?",
            options: ["Dirty Read", "Non-repeatable Read", "Phantom Read", "Lost Update"],
            correct: 2,
            reason: "Phantom reads occur when a transaction executing a range query sees different sets of rows because another transaction inserted new records."
        },
        {
            question: "Which of the following statements is TRUE about Conflict and View Serializability?",
            options: ["View Serializability implies Conflict Serializability", "Conflict Serializability implies View Serializability", "They are identical", "Neither implies the other"],
            correct: 1,
            reason: "Every conflict-serializable schedule is also view-serializable, but the reverse is not always true."
        },
        {
            question: "In Relational Algebra, what is the 'Division' operator used for?",
            options: ["Mathematical division of numeric values", "Finding entities that are related to ALL members of another set", "Splitting a table into two", "Deleting records"],
            correct: 1,
            reason: "Division (÷) is used for queries involving the word 'all', such as 'find students who have taken all courses in the CS department'."
        }
    ],
    os: [
        {
            question: "What is a 'Deadlock'?",
            options: ["A process is finished", "Two or more processes are waiting for each other to release resources", "A process is running too fast", "Operating system crash"],
            correct: 1,
            reason: "Deadlock is a state where a set of processes are blocked because each process is holding a resource and waiting for another resource held by some other process."
        },
        {
            question: "Which scheduling algorithm is non-preemptive?",
            options: ["Round Robin", "First Come First Served (FCFS)", "Priority Scheduling", "Shortest Remaining Time First"],
            correct: 1,
            reason: "In FCFS, once a process is allocated the CPU, it keeps the CPU until it releases it, either by terminating or requesting I/O."
        },
        {
            question: "Virtual memory is typically implemented by...",
            options: ["Paging", "Segmentation", "Caching", "All of the above"],
            correct: 0,
            reason: "Paging allows the physical address space of a process to be non-contiguous, which is the foundation of modern virtual memory systems."
        },
        {
            question: "The part of the OS that resides in main memory is called...",
            options: ["Shell", "Kernel", "Compiler", "Driver"],
            correct: 1,
            reason: "The kernel is the core component of an OS that manages system resources and the communication between hardware and software."
        },
        {
            question: "Which of these is NOT a state of a process?",
            options: ["Running", "Ready", "Waiting", "Execution"],
            correct: 3,
            reason: "Standard process states include New, Ready, Running, Waiting, and Terminated. 'Execution' is the act of running, not a specific state name."
        },
        {
            question: "What is Belady's Anomaly in page replacement algorithms?",
            options: ["Page fault rate decreases with more frames", "Page fault rate increases with more frames", "CPU usage drops to zero", "System enters a deadlock"],
            correct: 1,
            reason: "Specifically observed in FIFO, Belady's Anomaly occurs when increasing the number of page frames results in an increase in the number of page faults."
        },
        {
            question: "What is the penalty for a Translation Lookaside Buffer (TLB) miss?",
            options: ["Process termination", "Accessing the page table in main memory", "Disk swap operation", "Kernel panic"],
            correct: 1,
            reason: "A TLB miss requires the hardware to look up the page table in RAM, which takes significantly longer than a TLB cache hit."
        },
        {
            question: "In the Reader-Writer problem, what happens if priority is given to Readers?",
            options: ["Readers will wait forever", "Writers may suffer from starvation", "Deadlock occurs", "Throughput decreases"],
            correct: 1,
            reason: "If new readers can enter as long as at least one reader is active, a continuous stream of readers can prevent writers from ever gaining access."
        },
        {
            question: "What is the function of 'Inodes' in a UNIX file system?",
            options: ["Store user passwords", "Store metadata about a file and pointers to its data blocks", "Handle network requests", "Compress large files"],
            correct: 1,
            reason: "An inode contains all information about a file except its name and the actual data content."
        },
        {
            question: "What is the primary cause of 'Thrashing' in an Operating System?",
            options: ["Too many CPU cores", "Sum of working sets of processes exceeds total available memory", "Slow disk access", "Multiple deadlocks"],
            correct: 1,
            reason: "Thrashing occurs when the system spends more time swapping pages in and out of memory than executing actual instructions."
        },
        {
            question: "The Banker's Algorithm is used to determine if the system is in a...",
            options: ["Wait State", "Dead State", "Safe State", "Critical State"],
            correct: 2,
            reason: "The Banker's Algorithm simulates resource allocation to check for a safe sequence that avoids deadlock."
        },
        {
            question: "Which of the following is a classic software-based solution to the Critical Section problem for two processes?",
            options: ["Banker's Algorithm", "Peterson's Solution", "Dining Philosophers", "Round Robin"],
            correct: 1,
            reason: "Peterson's solution uses two shared variables (flag and turn) to ensure mutual exclusion, progress, and bounded waiting for two processes."
        },
        {
            question: "What is the main difference between Kernel-level threads and User-level threads?",
            options: ["User threads are faster to switch", "Kernel is aware of individual kernel-level threads", "Kernel threads do not need a CPU", "User threads can access hardware directly"],
            correct: 1,
            reason: "Because the kernel manages kernel-level threads, it can schedule another thread from the same process if one thread blocks."
        },
        {
            question: "How is the Effective Access Time calculated in demand paging?",
            options: ["(Hit Rate * Memory Access) + (Miss Rate * Page Fault Service Time)", "Memory Access / Disk Access", "Total Execution Time / Page Faults", "Constant 10ms"],
            correct: 0,
            reason: "The calculation accounts for both normal memory access hits and the severe penalty of servicing a page fault."
        },
        {
            question: "Which RAID level uses block-level striping with distributed parity?",
            options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
            correct: 2,
            reason: "RAID 5 provides both data redundancy and performance improvement by distributing parity info across all disks in the array."
        }
    ],
    networking: [
        {
            question: "How many layers are there in the OSI model?",
            options: ["4", "5", "6", "7"],
            correct: 3,
            reason: "The OSI model consists of 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application."
        },
        {
            question: "Which protocol is used to map an IP address to a MAC address?",
            options: ["DNS", "DHCP", "ARP", "HTTP"],
            correct: 2,
            reason: "ARP (Address Resolution Protocol) is used to find the hardware address (MAC) of a host from its known IP address."
        },
        {
            question: "What is the port number for HTTPS?",
            options: ["80", "443", "21", "25"],
            correct: 1,
            reason: "HTTPS uses port 443 by default for secure communication over TLS/SSL."
        },
        {
            question: "Which layer of the OSI model is responsible for routing?",
            options: ["Physical", "Data Link", "Network", "Transport"],
            correct: 2,
            reason: "The Network layer handles logical addressing and determines the best path (routing) for data packets."
        },
        {
            question: "IPv6 addresses have a size of...",
            options: ["32 bits", "64 bits", "128 bits", "256 bits"],
            correct: 2,
            reason: "IPv6 uses 128-bit addresses, allowing for a vastly larger number of unique addresses compared to IPv4's 32-bit system."
        },
        {
            question: "In a network with a /27 subnet mask, how many usable host addresses are available per subnet?",
            options: ["32", "30", "16", "14"],
            correct: 1,
            reason: "A /27 mask provides 5 host bits (2^5 = 32 addresses). Subtracting the network and broadcast addresses leaves 30 usable hosts."
        },
        {
            question: "In TCP Congestion Control, what happens when the 'Congestion Window' reaches the 'Slow Start Threshold'?",
            options: ["Connection terminates", "It switches from Slow Start to Congestion Avoidance", "Window size is reset to 1", "Data transfer stops"],
            correct: 1,
            reason: "At the threshold, TCP switches from exponential growth (Slow Start) to additive growth (Congestion Avoidance) to cautiously probe for bandwidth."
        },
        {
            question: "The Border Gateway Protocol (BGP) is classified as which type of routing protocol?",
            options: ["Distance Vector", "Link State", "Path Vector", "Static Routing"],
            correct: 2,
            reason: "BGP uses path vector routing to share network reachability information between autonomous systems (AS)."
        },
        {
            question: "How does ARP Spoofing work?",
            options: ["Guessing the IP address", "Sending fake/gratuitous ARP messages to link a MAC address with another IP", "Shutting down the router", "Cracking the WiFi password"],
            correct: 1,
            reason: "An attacker sends forged ARP responses to a local network to associate their MAC address with the IP address of a legitimate server/gateway."
        },
        {
            question: "What is the role of Root Name Servers in the DNS hierarchy?",
            options: ["They store all IP addresses", "They are the first step in resolving a domain name by pointing to TLD servers", "They host the actual websites", "They manage local ISP caches"],
            correct: 1,
            reason: "Root servers answer queries for records in the root zone and direct the recursive resolver to the appropriate Top-Level Domain (TLD) server."
        },
        {
            question: "What is the fundamental difference between CSMA/CD and CSMA/CA?",
            options: ["CD detects collisions (Ethernet), CA tries to avoid them (WiFi)", "CA is for wired, CD is for wireless", "CD is faster than CA", "They are the same"],
            correct: 0,
            reason: "CSMA/CD stops transmission when a collision is detected, while CSMA/CA uses a handshake (RTS/CTS) to avoid collisions in wireless environments."
        },
        {
            question: "The 'Fragment Offset' field in an IP header is measured in units of...",
            options: ["1 byte", "4 bytes", "8 bytes", "16 bytes"],
            correct: 2,
            reason: "IP fragments must be aligned to 8-byte boundaries (except the last fragment), so the offset field uses 8-byte units."
        },
        {
            question: "During an SSL/TLS handshake, what is the purpose of the Certificate validation?",
            options: ["To encrypt the data", "To verify the identity of the server using a trust chain to a CA", "To check the user's password", "To speed up the connection"],
            correct: 1,
            reason: "Validation ensures that the server's public key is legitimate and belongs to the domain you are visiting, preventing Man-in-the-Middle attacks."
        },
        {
            question: "In Distance Vector routing, what is the 'Count to Infinity' problem?",
            options: ["Network becomes too large", "Slow convergence leads to routing loops with increasing metrics", "The CPU enters an infinite loop", "Bandwidth becomes zero"],
            correct: 1,
            reason: "If a link goes down, routers may continue to update each other with increasing distance metrics, thinking another path exists, until they reach 'infinity'."
        },
        {
            question: "What is the primary purpose of the ICMP protocol?",
            options: ["Transferring files", "Error reporting and network diagnostics (e.g. Ping)", "Sending emails", "Assigning IP addresses"],
            correct: 1,
            reason: "ICMP is used by network devices to send error messages and operational information, such as when a host is unreachable."
        }
    ],
    testing: [
        {
            question: "Which testing type is primarily focused on verifying the 'Code Coverage' of an application?",
            options: ["Black-box Testing", "White-box Testing", "Gray-box Testing", "Regression Testing"],
            correct: 1,
            reason: "White-box testing analyzes the internal logic and structure, including statement, branch, and path coverage."
        },
        {
            question: "In Selenium, which wait mechanism is most efficient for handling dynamic elements with custom polling intervals?",
            options: ["Thread.sleep()", "Implicit Wait", "Explicit Wait", "Fluent Wait"],
            correct: 3,
            reason: "Fluent Wait allows you to define maximum wait time, polling frequency, and exceptions to ignore during the wait."
        },
        {
            question: "What is the primary purpose of 'Mutation Testing' in high-quality software engineering?",
            options: ["Finding UI bugs", "Testing DB performance", "Evaluating the effectiveness of test cases", "Checking server security"],
            correct: 2,
            reason: "It involves introducing small code changes (mutants) to verify if existing test suites are capable of detecting them."
        },
        {
            question: "Which tool is the industry standard for conducting 'Performance & Load Testing' on APIs and Web apps?",
            options: ["Selenium", "JUnit", "JMeter", "Postman"],
            correct: 2,
            reason: "Apache JMeter is designed to load test functional behavior and measure performance under various load conditions."
        },
        {
            question: "In modern Agile environments, what does the 'Shift Left' testing strategy advocate?",
            options: ["Moving testing to the end", "Starting testing earlier in the development lifecycle", "Testing only on mobile", "Manual testing over automation"],
            correct: 1,
            reason: "Shift-Left aims to find and fix defects earlier, reducing the overall cost of quality."
        },
        {
            question: "What is the key technical difference between a 'Stub' and a 'Mock' in unit testing frameworks?",
            options: ["Stubs are for UI only", "Mocks verify behavior/interaction while Stubs only provide canned data", "Stubs are faster", "There is no difference"],
            correct: 1,
            reason: "Mocks allow developers to verify that specific methods were called with specific parameters, unlike simple data-providing stubs."
        },
        {
            question: "Which testing principle states that 'Exhaustive testing is impossible'?",
            options: ["Pesticide paradox", "Absence-of-errors fallacy", "Defects show presence", "Exhaustive testing principle"],
            correct: 3,
            reason: "Testing every combination of inputs and preconditions is not feasible; hence, testing must be risk-based."
        },
        {
            question: "How does 'Equivalence Partitioning' help in optimizing the test suite?",
            options: ["It tests every single value", "It divides input data into classes and tests one representative from each", "It runs tests in parallel", "It only tests valid inputs"],
            correct: 1,
            reason: "This technique reduces the number of test cases while maintaining effective coverage by assuming values in a partition behave similarly."
        },
        {
            question: "Which values are most critical to test when applying 'Boundary Value Analysis'?",
            options: ["Random middle values", "Min, Max, and values just inside/outside the edges", "Only the average value", "String lengths only"],
            correct: 1,
            reason: "Errors are statistically more likely to occur at the boundaries of input ranges than in the middle."
        },
        {
            question: "What is the primary objective of 'Sanity Testing' after a bug fix?",
            options: ["Complete system overhaul", "Verify that the specific bug is fixed and the system is still stable", "Security audit", "UI color check"],
            correct: 1,
            reason: "Sanity testing is a quick, focused test to ensure a specific fix works as intended before deeper testing."
        },
        {
            question: "Which tool is most widely used for 'API Testing, Automation, and Documentation' in top IT firms?",
            options: ["Appium", "Postman", "Wireshark", "Burp Suite"],
            correct: 1,
            reason: "Postman provides a comprehensive workspace for API development, testing, and automated collection runs."
        },
        {
            question: "Why is 'Regression Testing' critical during the maintenance phase of software?",
            options: ["To add new features", "To ensure recent code changes haven't negatively impacted existing features", "To test server speed", "To update documentation"],
            correct: 1,
            reason: "Regression testing ensures that fixes or enhancements don't break functionality that was previously working."
        },
        {
            question: "What is the role of 'Automated Smoke Tests' in a CI/CD pipeline?",
            options: ["Finding every possible bug", "Verifying the build is stable enough for further testing stages", "Database cleanup", "Replacing manual testers"],
            correct: 1,
            reason: "Smoke tests cover the most critical 'happy path' functionality to catch major build issues immediately."
        },
        {
            question: "In the context of 'TDD', what does the 'Red-Green-Refactor' cycle mean?",
            options: ["Code-Test-Deploy", "Write failing test, make it pass, then optimize", "Design-UI-Code", "Testing with colored logs"],
            correct: 1,
            reason: "TDD requires writing a test first (Red), then the minimum code to pass (Green), then improving the code (Refactor)."
        },
        {
            question: "Which level of testing focuses on ensuring the system meets business requirements and is ready for production?",
            options: ["System Testing", "Unit Testing", "User Acceptance Testing (UAT)", "Integration Testing"],
            correct: 2,
            reason: "UAT is the final phase where users verify the system satisfies their business needs."
        }
    ],
    interview: [
        {
            question: "In a technical interview, how would you explain the 'Diamond Problem' in C++ and how Java avoids it?",
            options: ["Java uses multiple inheritance", "Java supports multiple interface implementation but only single class inheritance", "Java uses pointers", "Java doesn't have classes"],
            correct: 1,
            reason: "Java avoids the ambiguity of multiple inheritance by allowing a class to inherit from only one superclass but implement multiple interfaces."
        },
        {
            question: "What is the time complexity of searching an element in a balanced Binary Search Tree (BST)?",
            options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
            correct: 1,
            reason: "In a balanced BST, each comparison eliminates half of the remaining nodes, leading to logarithmic time complexity."
        },
        {
            question: "In a Zoho/TCS interview, you're asked: 'Can we override a static method in Java?' What is the correct answer?",
            options: ["Yes, always", "No, it leads to Method Hiding, not overriding", "Only if it's public", "Only in interfaces"],
            correct: 1,
            reason: "Static methods are bound to the class, not the instance. If a subclass defines a static method with the same signature, it hides the superclass method."
        },
        {
            question: "What is the 'Pesticide Paradox' in software testing terminology?",
            options: ["Testing too much causes bugs", "Running the same tests repeatedly will eventually stop finding new bugs", "Using too many tools is bad", "Bugs evolve to resist code"],
            correct: 1,
            reason: "To overcome this, test cases need to be regularly reviewed and updated to find new defects."
        },
        {
            question: "How do you handle 'Deadlock' prevention in a distributed system interview?",
            options: ["Reboot the system", "Use Banker's Algorithm or Resource Ordering", "Kill all processes", "Ignore it"],
            correct: 1,
            reason: "Deadlock can be prevented by ensuring at least one of the four necessary conditions (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait) cannot occur."
        },
        {
            question: "In a system design interview, what is the primary purpose of a 'Load Balancer'?",
            options: ["To store data", "To distribute incoming network traffic across multiple servers", "To encrypt passwords", "To speed up the database"],
            correct: 1,
            reason: "Load balancers ensure high availability and reliability by redirecting requests to healthy servers and preventing any single server from becoming a bottleneck."
        },
        {
            question: "What is the difference between 'Authentication' and 'Authorization'?",
            options: ["They are the same", "AuthN is identity verification; AuthZ is permission verification", "AuthN is for admins; AuthZ is for users", "AuthN is faster"],
            correct: 1,
            reason: "Authentication (AuthN) confirms who the user is, while Authorization (AuthZ) determines what they are allowed to do."
        },
        {
            question: "Explain 'Big O' notation in the context of scalability.",
            options: ["It measures the size of the code", "It describes the upper bound of the growth rate of an algorithm's runtime", "It is the version of the software", "It measures CPU temperature"],
            correct: 1,
            reason: "Big O provides a high-level understanding of how an algorithm will perform as the input size increases towards infinity."
        },
        {
            question: "In a database interview, what is a 'Sharding' strategy?",
            options: ["Backing up data", "Horizontal partitioning of data across multiple databases", "Indexing primary keys", "Deleting old records"],
            correct: 1,
            reason: "Sharding helps in scaling out by distributing the dataset and load across multiple independent machines."
        },
        {
            question: "What is 'CAP Theorem' in distributed systems?",
            options: ["Consistency, Availability, Partition Tolerance", "Complexity, Accuracy, Performance", "Caching, Access, Portability", "Control, Authorization, Privacy"],
            correct: 0,
            reason: "It states that a distributed system can only provide two out of three guarantees: Consistency, Availability, and Partition Tolerance."
        },
        {
            question: "What is the 'SDLC' model followed in high-speed startup environments (like Zoho/SaaS firms)?",
            options: ["Waterfall", "Agile/Scrum", "V-Model", "Spiral"],
            correct: 1,
            reason: "Agile allows for iterative development, rapid feedback, and the ability to pivot quickly based on user needs."
        },
        {
            question: "How does a 'Microservices' architecture differ from a 'Monolith'?",
            options: ["Microservices use one big database", "Microservices break an app into small, independent services communicating over APIs", "Monoliths are faster to deploy", "Microservices are only for mobile apps"],
            correct: 1,
            reason: "Microservices allow teams to develop, deploy, and scale parts of the application independently."
        },
        {
            question: "What is 'Dependency Injection' and why is it used?",
            options: ["It's a way to inject viruses", "A design pattern that removes hard-coded dependencies for better testability/decoupling", "A way to speed up SQL queries", "A feature of CSS"],
            correct: 1,
            reason: "DI allows objects to receive their dependencies from an external source rather than creating them internally, following the Inversion of Control principle."
        },
        {
            question: "In a coding interview, what is the 'Two Pointer Technique' primarily used for?",
            options: ["Double the memory", "Solving array/string problems with O(n) complexity instead of O(n^2)", "Pointing to two different databases", "Sorting 3D arrays"],
            correct: 1,
            reason: "It involves using two indices to iterate through a data structure, often from both ends or at different speeds (slow/fast pointers)."
        },
        {
            question: "What is 'DNS Propagation'?",
            options: ["Generating new domain names", "The time it takes for DNS changes to be updated across all servers worldwide", "Blocking a website", "Buying a domain"],
            correct: 1,
            reason: "After updating DNS records, it can take up to 48 hours for the new information to reach all ISP caches globally."
        },
        {
            question: "What is 'Late Binding' (Dynamic Binding) in Java?",
            options: ["Binding variables at compile time", "Resolution of method calls at runtime based on the actual object type", "A bug in the JVM", "Loading classes slowly"],
            correct: 1,
            reason: "This is a core pillar of polymorphism, where the JVM decides which overridden method to execute at runtime."
        },
        {
            question: "What is the purpose of 'Docker' in modern DevOps interviews?",
            options: ["To edit photos", "To containerize applications ensuring they run identically in all environments", "To store big data", "To replace the OS"],
            correct: 1,
            reason: "Docker packages an application and its dependencies into an isolated container, eliminating the 'it works on my machine' problem."
        },
        {
            question: "In SQL, what is the 'GROUP BY' clause used for?",
            options: ["To sort data", "To aggregate data into groups based on one or more columns", "To join two tables", "To delete duplicates"],
            correct: 1,
            reason: "It is often used with aggregate functions like COUNT, MAX, MIN, SUM, and AVG."
        },
        {
            question: "What is 'Memoization' in Dynamic Programming?",
            options: ["Taking notes during an interview", "Storing results of expensive function calls and returning the cached result when the same inputs occur", "Deleting old cache", "A type of sorting"],
            correct: 1,
            reason: "Memoization significantly optimizes recursive algorithms by avoiding redundant calculations."
        },
        {
            question: "In an HR/Behavioral round, how should you use the 'STAR' method?",
            options: ["By drawing a star", "Situation, Task, Action, Result", "Stop, Think, Act, Review", "Simple, Tough, Awesome, Real"],
            correct: 1,
            reason: "The STAR method is a structured way to answer behavioral interview questions by describing a specific event and its outcome."
        }
    ]
};
