import React from 'react';

const Answer = () => {
    return (
		<div>
			<div>
				<h1>How does react work?</h1>
				<p>
					React creates a VIRTUAL DOM in memory.
					Instead of manipulating the browser's DOM
					directly, React creates a virtual DOM in
					memory, where it does all the necessary
					manipulating, before making the changes in
					the browser DOM. React only changes what
					needs to be changed! React finds out what
					changes have been made, and changes only what
					needs to be changed.
				</p>
			</div>

			<div>
				<h1>
					What are the differences between props and
					state ?
				</h1>
				<p>
					1.Props are used to pass data from one
					component to another. But state- The Data is
					passed within the component only. <br />
					2. props is Immutable (cannot be modified).
					Data is Mutable. <br />
					3.Props can be used with state and functional
					component. State can be used only with the
					state components/class component (Before
					16.0). <br />
					4. Props are read-only. State is both read
					and write
				</p>
			</div>
		</div>
    );
};

export default Answer;