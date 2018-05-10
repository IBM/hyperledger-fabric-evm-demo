pragma solidity ^0.4.16;

contract Poll {
    struct Proposal {
        bytes32 name;   // short name (up to 32 bytes)
        uint voteCount; // number of accumulated votes
    }

    Proposal[] public proposals;

    function Poll(bytes32[] proposalNames) public {
        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    }

    function vote(uint proposal) public {
        proposals[proposal].voteCount += 1;
    }
}
