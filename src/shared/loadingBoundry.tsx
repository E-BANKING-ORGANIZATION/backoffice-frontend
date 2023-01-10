import React, { Component } from "react";
import { LoadingComponent } from "./loadingBoundryComponent";

type Props = React.PropsWithChildren<{ loading: boolean }>;

interface State {
  isloading: boolean;
}

export class LoadingBoundry extends Component<Props, State> {
  public state: State = {
    isloading: this.props.loading,
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps.loading !== this.props.loading) {
      this.setState({ isloading: this.props.loading });
    }
  }

  public render() {
    if (this.state.isloading) return <LoadingComponent />;
    return this.props.children;
  }
}
